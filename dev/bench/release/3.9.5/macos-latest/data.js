window.BENCHMARK_DATA = {
  "lastUpdate": 1705574377027,
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
          "id": "e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8",
          "message": "Release 3.9.5",
          "timestamp": "2024-01-18T19:23:04+09:00",
          "tree_id": "da14c07be829cc800aae2bc03d11a08274732fb5",
          "url": "https://github.com/greymistcube/libplanet/commit/e5cd975ccbf0c3a5de3322248f1a35a8e7c762e8"
        },
        "date": 1705574357832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9578350.785714285,
            "unit": "ns",
            "range": "± 110434.1094960308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23537509.3125,
            "unit": "ns",
            "range": "± 460325.6160018643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47077169,
            "unit": "ns",
            "range": "± 537188.4000363994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105802257.28,
            "unit": "ns",
            "range": "± 10799114.975164915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223532431.53932583,
            "unit": "ns",
            "range": "± 22475941.46087196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50645.85567010309,
            "unit": "ns",
            "range": "± 14452.397513755928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248771.51030927835,
            "unit": "ns",
            "range": "± 27346.777726656255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274137.3169014084,
            "unit": "ns",
            "range": "± 12972.124732132203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218984.44086021505,
            "unit": "ns",
            "range": "± 25530.77871709666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3766579.0483870967,
            "unit": "ns",
            "range": "± 109521.27363388927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4075205.45,
            "unit": "ns",
            "range": "± 180975.6785906229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14385.617021276596,
            "unit": "ns",
            "range": "± 2856.7246306200095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87731.1,
            "unit": "ns",
            "range": "± 13305.466344582155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92764.76344086022,
            "unit": "ns",
            "range": "± 11598.366988126287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72900.04838709677,
            "unit": "ns",
            "range": "± 12210.451212611597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5495.183673469388,
            "unit": "ns",
            "range": "± 2066.791420340866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19925.989898989897,
            "unit": "ns",
            "range": "± 6497.174837361534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1241365.6263157895,
            "unit": "ns",
            "range": "± 157586.9642233545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479362.030927835,
            "unit": "ns",
            "range": "± 257846.05483587706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165256.7634408604,
            "unit": "ns",
            "range": "± 541867.6352518204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7926360.551724138,
            "unit": "ns",
            "range": "± 760096.0392392247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896687.701754386,
            "unit": "ns",
            "range": "± 125739.00704307044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2998265.977272727,
            "unit": "ns",
            "range": "± 108375.30445105996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4073408.511764706,
            "unit": "ns",
            "range": "± 390406.0167168001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4158846.5517241377,
            "unit": "ns",
            "range": "± 121522.79116709702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14344469.583333334,
            "unit": "ns",
            "range": "± 2053310.4050669454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5182414.99984375,
            "unit": "ns",
            "range": "± 528962.5433019338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1352136.1619591345,
            "unit": "ns",
            "range": "± 12319.90138202551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877308.9753255208,
            "unit": "ns",
            "range": "± 9360.403453162497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975964.0427083333,
            "unit": "ns",
            "range": "± 29158.728369823304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625540.3064453125,
            "unit": "ns",
            "range": "± 7587.7722486989915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564746.4793619792,
            "unit": "ns",
            "range": "± 5682.085245634042"
          }
        ]
      }
    ]
  }
}