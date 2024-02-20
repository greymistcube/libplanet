window.BENCHMARK_DATA = {
  "lastUpdate": 1708395521088,
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
          "id": "c1414e8ce929a1e5b5195134d44aef321b719aba",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T11:07:47+09:00",
          "tree_id": "4652084f03c64430ed32917042b6ade68d9df046",
          "url": "https://github.com/greymistcube/libplanet/commit/c1414e8ce929a1e5b5195134d44aef321b719aba"
        },
        "date": 1708395514464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5820003.766666667,
            "unit": "ns",
            "range": "± 49794.2619793352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14512495.8,
            "unit": "ns",
            "range": "± 96857.75980433516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38136742.85714286,
            "unit": "ns",
            "range": "± 179774.32423837014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77064201.92857143,
            "unit": "ns",
            "range": "± 719734.6133182558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151544537.34615386,
            "unit": "ns",
            "range": "± 723483.34468054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200464.5,
            "unit": "ns",
            "range": "± 11022.361706034315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197816.58241758242,
            "unit": "ns",
            "range": "± 13532.656084093547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168375.05555555556,
            "unit": "ns",
            "range": "± 3403.488063256874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3204759.230769231,
            "unit": "ns",
            "range": "± 43271.31105816309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2917492.285714286,
            "unit": "ns",
            "range": "± 19224.17787550383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15828.80612244898,
            "unit": "ns",
            "range": "± 2790.0439282953594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66913.59183673469,
            "unit": "ns",
            "range": "± 7978.113017586047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89276.375,
            "unit": "ns",
            "range": "± 3132.7065359501225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65876.0306122449,
            "unit": "ns",
            "range": "± 13887.581972962545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3318.795918367347,
            "unit": "ns",
            "range": "± 740.6316503002471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13974.934343434343,
            "unit": "ns",
            "range": "± 2227.09594544938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41907.448979591834,
            "unit": "ns",
            "range": "± 6301.342992384985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959084.9195402298,
            "unit": "ns",
            "range": "± 61596.57099169815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839203.177419355,
            "unit": "ns",
            "range": "± 54481.20874539349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626047.8125,
            "unit": "ns",
            "range": "± 123845.26061333767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7878860.905660378,
            "unit": "ns",
            "range": "± 285072.49600909645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3691385.6947115385,
            "unit": "ns",
            "range": "± 37213.45627305361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243623.2404891304,
            "unit": "ns",
            "range": "± 26900.764487099437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795053.5290715144,
            "unit": "ns",
            "range": "± 2904.531992712622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976101.2509014423,
            "unit": "ns",
            "range": "± 3371.5056521143424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627812.2374674479,
            "unit": "ns",
            "range": "± 820.9784099639458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578189.4940655048,
            "unit": "ns",
            "range": "± 1193.8091485070775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480764.1126760566,
            "unit": "ns",
            "range": "± 115238.83884431986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625749.5625,
            "unit": "ns",
            "range": "± 48172.93235344063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3253689.8,
            "unit": "ns",
            "range": "± 52014.345310006276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3362379.3970588236,
            "unit": "ns",
            "range": "± 155478.9609970448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8895520.5,
            "unit": "ns",
            "range": "± 246838.36142399238"
          }
        ]
      }
    ]
  }
}