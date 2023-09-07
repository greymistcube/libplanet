window.BENCHMARK_DATA = {
  "lastUpdate": 1694077332356,
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
          "id": "8d5061ad67fe49337166fe2937af64881f18cc6f",
          "message": "Changelog",
          "timestamp": "2023-09-07T17:44:12+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/greymistcube/libplanet/commit/8d5061ad67fe49337166fe2937af64881f18cc6f"
        },
        "date": 1694077307327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429251.5463917525,
            "unit": "ns",
            "range": "± 131246.04923688978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2627493.103448276,
            "unit": "ns",
            "range": "± 115138.9459801839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1734634.0425531915,
            "unit": "ns",
            "range": "± 111700.35045159404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4623389.873417721,
            "unit": "ns",
            "range": "± 238595.75650950446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53135.48387096774,
            "unit": "ns",
            "range": "± 3906.6455409838754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7899635.483870967,
            "unit": "ns",
            "range": "± 240540.4131650052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21698320,
            "unit": "ns",
            "range": "± 229130.23495695318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54259257.14285714,
            "unit": "ns",
            "range": "± 554224.079181927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108674590,
            "unit": "ns",
            "range": "± 817754.2599792959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217485206.66666666,
            "unit": "ns",
            "range": "± 2384296.4150777017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4580022.057291667,
            "unit": "ns",
            "range": "± 19571.445570338044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437332.3567708333,
            "unit": "ns",
            "range": "± 6148.163107852411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079949.21875,
            "unit": "ns",
            "range": "± 2508.541446055811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678802.7083333335,
            "unit": "ns",
            "range": "± 10236.12239873486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844190.2750651041,
            "unit": "ns",
            "range": "± 2040.9607092753927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771383.4440104166,
            "unit": "ns",
            "range": "± 4281.882927860056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3685092.3076923075,
            "unit": "ns",
            "range": "± 99088.4490667885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3766479.3103448274,
            "unit": "ns",
            "range": "± 107157.80212681784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4419558.064516129,
            "unit": "ns",
            "range": "± 134677.5402562074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066146.6666666665,
            "unit": "ns",
            "range": "± 55185.956633221555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6234894.285714285,
            "unit": "ns",
            "range": "± 202353.09114465813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266418.1818181818,
            "unit": "ns",
            "range": "± 8910.674881842244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256290.76923076922,
            "unit": "ns",
            "range": "± 10158.412817046692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240812.12121212122,
            "unit": "ns",
            "range": "± 16380.085424556553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219340,
            "unit": "ns",
            "range": "± 62188.16837401055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863086.6666666665,
            "unit": "ns",
            "range": "± 66619.07563224845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25084.375,
            "unit": "ns",
            "range": "± 2427.423504133766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95405.20833333333,
            "unit": "ns",
            "range": "± 7944.496536552725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85330.92783505155,
            "unit": "ns",
            "range": "± 8394.459492535616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93774.73684210527,
            "unit": "ns",
            "range": "± 16809.198143196638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6170.833333333333,
            "unit": "ns",
            "range": "± 1284.3115433378605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23303.061224489797,
            "unit": "ns",
            "range": "± 3509.4409952734213"
          }
        ]
      }
    ]
  }
}