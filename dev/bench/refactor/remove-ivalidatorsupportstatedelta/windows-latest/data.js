window.BENCHMARK_DATA = {
  "lastUpdate": 1687761055176,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687761034925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452597,
            "unit": "ns",
            "range": "± 181589.63640999768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747511.290322581,
            "unit": "ns",
            "range": "± 124112.9748502413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2256997.0149253733,
            "unit": "ns",
            "range": "± 102396.251958735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5544256.470588235,
            "unit": "ns",
            "range": "± 299120.0835653749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49639.784946236556,
            "unit": "ns",
            "range": "± 2922.6677727328024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897428.571428572,
            "unit": "ns",
            "range": "± 100219.83089935097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19854400,
            "unit": "ns",
            "range": "± 436132.23568087694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49814633.333333336,
            "unit": "ns",
            "range": "± 807014.2153701654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100589583.33333333,
            "unit": "ns",
            "range": "± 2141476.9192284644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200361010,
            "unit": "ns",
            "range": "± 2861600.527876464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804190.572916667,
            "unit": "ns",
            "range": "± 21182.90439533456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526058.0729166667,
            "unit": "ns",
            "range": "± 8109.8423144535445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170093.2942708333,
            "unit": "ns",
            "range": "± 4834.00485637045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617666.5885416665,
            "unit": "ns",
            "range": "± 9086.189829961977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833497.4479166666,
            "unit": "ns",
            "range": "± 3421.2962312433774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752992.8292410715,
            "unit": "ns",
            "range": "± 2095.9601150635726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231245.4545454546,
            "unit": "ns",
            "range": "± 121030.91754636154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354621.875,
            "unit": "ns",
            "range": "± 153936.59122204667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236445.454545454,
            "unit": "ns",
            "range": "± 102796.45851446869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215445,
            "unit": "ns",
            "range": "± 187250.3105154584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804089.743589744,
            "unit": "ns",
            "range": "± 233207.14396711977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272102.12765957444,
            "unit": "ns",
            "range": "± 10056.308626963475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259271.6049382716,
            "unit": "ns",
            "range": "± 13656.722104589202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248803,
            "unit": "ns",
            "range": "± 20365.555467380444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4087173.3333333335,
            "unit": "ns",
            "range": "± 63115.534273795594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760806.25,
            "unit": "ns",
            "range": "± 70885.79988262811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22652.577319587628,
            "unit": "ns",
            "range": "± 2540.918993178828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97379,
            "unit": "ns",
            "range": "± 9524.46392881579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74144.68085106384,
            "unit": "ns",
            "range": "± 5535.173298591096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101603.2258064516,
            "unit": "ns",
            "range": "± 11969.712244669725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.791666666667,
            "unit": "ns",
            "range": "± 1142.1927011965481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.744680851065,
            "unit": "ns",
            "range": "± 2015.7799469005142"
          }
        ]
      }
    ]
  }
}