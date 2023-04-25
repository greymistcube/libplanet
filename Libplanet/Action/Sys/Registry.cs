using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Bencodex.Types;

namespace Libplanet.Action.Sys
{
    internal static class Registry
    {
        public static readonly Dictionary<IValue, Type> Types;

        static Registry()
        {
            var assembly = Assembly.GetExecutingAssembly();
            Types = assembly
                .GetTypes()
                .Where(type => type.Namespace == typeof(Registry).Namespace)
                .Where(type => type.GetCustomAttribute<ActionTypeAttribute>() is { })
                .ToDictionary(
                    type => type.GetCustomAttribute<ActionTypeAttribute>()!.TypeIdentifier,
                    type => type);
        }

        public static IAction Deserialize(IValue serialized)
        {
            if (!(serialized is Dictionary dict))
            {
                throw new ArgumentException(
                    $"Given {nameof(serialized)} must be a {nameof(Dictionary)}: " +
                    $"{serialized.GetType()}",
                    nameof(serialized));
            }

            if (!dict.TryGetValue((Text)"type_id", out IValue typeIdValue))
            {
                throw new ArgumentException(
                    $"No type_id field found: {serialized}", nameof(serialized));
            }

            if (!dict.TryGetValue((Text)"values", out IValue values))
            {
                throw new ArgumentException(
                    $"No values field found: {serialized}", nameof(serialized));
            }

            try
            {
                IAction action = Instantiate(typeIdValue);
                action.LoadPlainValue(values);
                return action;
            }
            catch (Exception e)
            {
                throw new ArgumentException(
                    $"Failed to deserialize to a system action: {serialized}",
                    nameof(serialized),
                    e);
            }
        }

        public static IValue Serialize(IAction action)
        {
            var typeId = GetTypeId(action);
            if (typeId is null)
            {
                throw new ArgumentException("Unknown system action type.", nameof(action));
            }

            return Bencodex.Types.Dictionary.Empty
                .Add("type_id", typeId)
                .Add("values", action.PlainValue);
        }

        public static bool IsSystemAction(IAction action) => Types.ContainsValue(action.GetType());

        private static IAction Instantiate(IValue typeId) =>
            (IAction)(Activator.CreateInstance(Types[typeId]) ??
                throw new ArgumentException(
                    $"Failed to create an instance for given type id: {typeId}"));

        private static IValue? GetTypeId(IAction action) =>
            Types.FirstOrDefault(x => x.Value == action.GetType()).Key;
    }
}
