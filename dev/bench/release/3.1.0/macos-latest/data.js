window.BENCHMARK_DATA = {
  "lastUpdate": 1690449918772,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "304d797548b429563ae66433248c1e59c5d4feef",
          "message": "Merge pull request #3335 from greymistcube/bump/bencodex-to-0.12.0\n\n⬆️ Bump bencodex to 0.12.0",
          "timestamp": "2023-07-27T18:04:18+09:00",
          "tree_id": "6b63e87d2f53702d72a622bb2968f235482b384b",
          "url": "https://github.com/greymistcube/libplanet/commit/304d797548b429563ae66433248c1e59c5d4feef"
        },
        "date": 1690449895226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10099728.75,
            "unit": "ns",
            "range": "± 1055858.1894980923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23805558.82,
            "unit": "ns",
            "range": "± 2200492.5589706497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53044302.95454545,
            "unit": "ns",
            "range": "± 2492838.546102021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107690155.06756757,
            "unit": "ns",
            "range": "± 5371627.7728200825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225717946.60714287,
            "unit": "ns",
            "range": "± 6412181.0543589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69793.55913978495,
            "unit": "ns",
            "range": "± 12808.349384935327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301510.37313432834,
            "unit": "ns",
            "range": "± 14169.90291752186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296363.793814433,
            "unit": "ns",
            "range": "± 21715.69826230657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293812.68686868687,
            "unit": "ns",
            "range": "± 20438.75311786884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4147945.71875,
            "unit": "ns",
            "range": "± 122284.38938372553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3856616.0714285714,
            "unit": "ns",
            "range": "± 35862.95125241322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22161.943298969072,
            "unit": "ns",
            "range": "± 4649.299481214598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101210.74,
            "unit": "ns",
            "range": "± 15862.7396481137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93476.9387755102,
            "unit": "ns",
            "range": "± 11992.697337943282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102396.09139784946,
            "unit": "ns",
            "range": "± 10985.486821292661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.5,
            "unit": "ns",
            "range": "± 1081.1667408431395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17399.752688172044,
            "unit": "ns",
            "range": "± 2135.490126288668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1771297.347826087,
            "unit": "ns",
            "range": "± 206437.3127832887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3372872.9775280897,
            "unit": "ns",
            "range": "± 350011.36752832035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235733.430232558,
            "unit": "ns",
            "range": "± 194841.77781662266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668212.402173913,
            "unit": "ns",
            "range": "± 632378.2948720804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3349378.39010989,
            "unit": "ns",
            "range": "± 238031.03785293072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513062.117647059,
            "unit": "ns",
            "range": "± 153501.4756456398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4526273.26,
            "unit": "ns",
            "range": "± 228450.99554679115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856206.2771084337,
            "unit": "ns",
            "range": "± 205142.73905980407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7196942.402298851,
            "unit": "ns",
            "range": "± 372007.06081828853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6692639.255208333,
            "unit": "ns",
            "range": "± 135989.0526764029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984005.2823660714,
            "unit": "ns",
            "range": "± 17185.41352068246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277579.69453125,
            "unit": "ns",
            "range": "± 11468.596135286032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2983931.232607887,
            "unit": "ns",
            "range": "± 70782.0192920603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854061.021344866,
            "unit": "ns",
            "range": "± 4794.6686277445915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 689343.5953776041,
            "unit": "ns",
            "range": "± 9098.832697567273"
          }
        ]
      }
    ]
  }
}