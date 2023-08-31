window.BENCHMARK_DATA = {
  "lastUpdate": 1693482104506,
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
          "id": "571d2e2ecda5fef58ff55aa70421c94e053a5be9",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T10:55:48+09:00",
          "tree_id": "f99d98bba7f37125fa41427b2ed6228f30cb9410",
          "url": "https://github.com/greymistcube/libplanet/commit/571d2e2ecda5fef58ff55aa70421c94e053a5be9"
        },
        "date": 1693448556541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11408614.351063829,
            "unit": "ns",
            "range": "± 2886967.5174726234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33065989.333333332,
            "unit": "ns",
            "range": "± 3880688.0135246734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78395866.76530612,
            "unit": "ns",
            "range": "± 18440090.331892952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143628315.4375,
            "unit": "ns",
            "range": "± 42576932.364663914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309564980.22,
            "unit": "ns",
            "range": "± 70950211.17522338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80233.90697674418,
            "unit": "ns",
            "range": "± 11153.310869426548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363580.86516853934,
            "unit": "ns",
            "range": "± 32140.903565815763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341895.5879120879,
            "unit": "ns",
            "range": "± 40864.226619283836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317069.1529411765,
            "unit": "ns",
            "range": "± 29132.35067122275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4351208.057471264,
            "unit": "ns",
            "range": "± 325772.1398386886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783991.210526316,
            "unit": "ns",
            "range": "± 130359.29933221838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24044.67032967033,
            "unit": "ns",
            "range": "± 4170.452006024568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113312.54945054946,
            "unit": "ns",
            "range": "± 15017.32905624827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114237.05681818182,
            "unit": "ns",
            "range": "± 10494.104110270411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116218.53125,
            "unit": "ns",
            "range": "± 20958.185922376677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7409.416666666667,
            "unit": "ns",
            "range": "± 1583.5471153921087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24109.21978021978,
            "unit": "ns",
            "range": "± 3551.2706483492098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1782358.9494382022,
            "unit": "ns",
            "range": "± 271324.54033663566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3347777.061797753,
            "unit": "ns",
            "range": "± 566011.2058593964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2482630.4725274723,
            "unit": "ns",
            "range": "± 454869.98365150305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7296485.203296703,
            "unit": "ns",
            "range": "± 1373555.1897735347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3804974.715909091,
            "unit": "ns",
            "range": "± 621778.0616985518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586759.05,
            "unit": "ns",
            "range": "± 81177.15026213706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4687483.318181818,
            "unit": "ns",
            "range": "± 541054.1717159908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4648726.287356322,
            "unit": "ns",
            "range": "± 610024.5232635174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9481088.367346939,
            "unit": "ns",
            "range": "± 2604261.8579131053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5880591.000244141,
            "unit": "ns",
            "range": "± 181745.4993860006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2249902.533222656,
            "unit": "ns",
            "range": "± 378743.5762506085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399528.344375,
            "unit": "ns",
            "range": "± 298321.25822204456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4403329.660873724,
            "unit": "ns",
            "range": "± 1073745.9066219728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908897.0279060133,
            "unit": "ns",
            "range": "± 56096.06955821274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838687.7708412729,
            "unit": "ns",
            "range": "± 30137.351425597266"
          }
        ]
      },
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
          "id": "b009c43def68be5293857b846e3d88bf5d14f615",
          "message": "Refactor NodeDecoder",
          "timestamp": "2023-08-31T20:21:28+09:00",
          "tree_id": "a28e26137d61b69419adef608eb66cfff1c312f0",
          "url": "https://github.com/greymistcube/libplanet/commit/b009c43def68be5293857b846e3d88bf5d14f615"
        },
        "date": 1693482087809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9546414.025773196,
            "unit": "ns",
            "range": "± 629044.2504639329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24163059.26470588,
            "unit": "ns",
            "range": "± 1297376.5192362668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56523501.26086956,
            "unit": "ns",
            "range": "± 2723102.889966456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115402445.42465754,
            "unit": "ns",
            "range": "± 5724348.904956681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233435344.0625,
            "unit": "ns",
            "range": "± 4541984.09213094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73543.09523809524,
            "unit": "ns",
            "range": "± 5691.015394438508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374874.9456521739,
            "unit": "ns",
            "range": "± 48190.65536345871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346752.4895833333,
            "unit": "ns",
            "range": "± 46818.706880340666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325666.60638297873,
            "unit": "ns",
            "range": "± 33337.72393144771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4483378.582474227,
            "unit": "ns",
            "range": "± 315560.2864130676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4037944.224489796,
            "unit": "ns",
            "range": "± 250602.83886572885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24831.607526881722,
            "unit": "ns",
            "range": "± 3129.9567869720336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115144.62244897959,
            "unit": "ns",
            "range": "± 13939.914465463526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111438.87931034483,
            "unit": "ns",
            "range": "± 8632.132951054637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115461.36458333333,
            "unit": "ns",
            "range": "± 14675.919084010266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8039.563218390805,
            "unit": "ns",
            "range": "± 763.6305678878872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23826.70879120879,
            "unit": "ns",
            "range": "± 2243.4692505456983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570840.78125,
            "unit": "ns",
            "range": "± 184148.14127330962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2961179.865591398,
            "unit": "ns",
            "range": "± 171889.60154961853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140860.0520833335,
            "unit": "ns",
            "range": "± 305162.85760125803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5591421.776119403,
            "unit": "ns",
            "range": "± 265382.3723514306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3557168.180412371,
            "unit": "ns",
            "range": "± 243012.49525108215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3806338.826530612,
            "unit": "ns",
            "range": "± 357353.34944431786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4826290.2727272725,
            "unit": "ns",
            "range": "± 398419.9260243152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4206344.302083333,
            "unit": "ns",
            "range": "± 341567.3497618887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7786958.090909091,
            "unit": "ns",
            "range": "± 677459.9906410783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6098936.436941965,
            "unit": "ns",
            "range": "± 62131.43913109196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843784.9850725445,
            "unit": "ns",
            "range": "± 22971.06015386238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1096164.8997395833,
            "unit": "ns",
            "range": "± 9133.40962635709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996750.340104167,
            "unit": "ns",
            "range": "± 50208.290744550526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867719.1553385417,
            "unit": "ns",
            "range": "± 14644.75287417623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782133.6882161458,
            "unit": "ns",
            "range": "± 10213.617786507464"
          }
        ]
      }
    ]
  }
}