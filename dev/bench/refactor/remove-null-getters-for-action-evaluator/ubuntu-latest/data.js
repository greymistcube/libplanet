window.BENCHMARK_DATA = {
  "lastUpdate": 1686748739159,
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
          "id": "547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2",
          "message": "General internal API cleanup",
          "timestamp": "2023-06-14T21:58:12+09:00",
          "tree_id": "c1642302083e2f353fa08f273beb05f5929b1087",
          "url": "https://github.com/greymistcube/libplanet/commit/547deb9dd63c6b6c2d7ffb7d10ea66d40b9929c2"
        },
        "date": 1686748732081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451549.6170212766,
            "unit": "ns",
            "range": "± 134176.10830798536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3682843.054054054,
            "unit": "ns",
            "range": "± 123343.12285065817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434641.5,
            "unit": "ns",
            "range": "± 107687.64151057962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4643400.1875,
            "unit": "ns",
            "range": "± 84358.85582851295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7198106.903225807,
            "unit": "ns",
            "range": "± 214829.58497025107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5984131.486778846,
            "unit": "ns",
            "range": "± 18043.63505497563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842484.2828125,
            "unit": "ns",
            "range": "± 8015.8185227202475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373008.8365885417,
            "unit": "ns",
            "range": "± 6322.8247036887715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603955.5703125,
            "unit": "ns",
            "range": "± 4874.5847293818615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816739.9302734375,
            "unit": "ns",
            "range": "± 2226.6985284537564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766321.3760416667,
            "unit": "ns",
            "range": "± 1755.2337188510282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294552.425,
            "unit": "ns",
            "range": "± 10450.777718299614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278071.0625,
            "unit": "ns",
            "range": "± 7677.008737604645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239842.63636363635,
            "unit": "ns",
            "range": "± 6867.035381768532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4315679.5,
            "unit": "ns",
            "range": "± 61515.055714028254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936826.933333333,
            "unit": "ns",
            "range": "± 56528.49542925442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19175.567010309278,
            "unit": "ns",
            "range": "± 1534.4710129988368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87642.06382978724,
            "unit": "ns",
            "range": "± 5226.056464287863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79192.25252525252,
            "unit": "ns",
            "range": "± 6165.493226116996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96385.31578947368,
            "unit": "ns",
            "range": "± 11635.295893853065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5271.927083333333,
            "unit": "ns",
            "range": "± 849.128026362049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18630.78947368421,
            "unit": "ns",
            "range": "± 2018.0693475144456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488813.8988764044,
            "unit": "ns",
            "range": "± 82088.64084898005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2819426.076923077,
            "unit": "ns",
            "range": "± 97410.17114578857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2360826.7922077924,
            "unit": "ns",
            "range": "± 120924.8429047365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5801272.022222222,
            "unit": "ns",
            "range": "± 220741.3910218233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49030.35294117647,
            "unit": "ns",
            "range": "± 2356.5965556986057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8036970.8,
            "unit": "ns",
            "range": "± 148625.0827034253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21868579.066666666,
            "unit": "ns",
            "range": "± 318941.3171712373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55392378.46666667,
            "unit": "ns",
            "range": "± 590920.5530326471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109187039.55555555,
            "unit": "ns",
            "range": "± 2288301.592590021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222568341.4375,
            "unit": "ns",
            "range": "± 4237694.851867777"
          }
        ]
      }
    ]
  }
}