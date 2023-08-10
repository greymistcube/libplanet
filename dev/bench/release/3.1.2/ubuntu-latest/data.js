window.BENCHMARK_DATA = {
  "lastUpdate": 1691649754910,
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
          "id": "d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:19:05+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/d0fd56e61303efd4e96725b9bbbc2ad0b1d1be17"
        },
        "date": 1691649231493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3637706.88,
            "unit": "ns",
            "range": "± 96902.87552893705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3852548.714285714,
            "unit": "ns",
            "range": "± 37906.274066497164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366236.95,
            "unit": "ns",
            "range": "± 97885.973298944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4041512.1875,
            "unit": "ns",
            "range": "± 123428.34275869242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6469115.4,
            "unit": "ns",
            "range": "± 240610.2516814278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8869484.066666666,
            "unit": "ns",
            "range": "± 146477.47241005386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23683466.4,
            "unit": "ns",
            "range": "± 145805.95731107835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57223020.14285714,
            "unit": "ns",
            "range": "± 309526.57930902677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114672059.06666666,
            "unit": "ns",
            "range": "± 724725.3607327465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229410791.4,
            "unit": "ns",
            "range": "± 1230010.3196425864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54187.915789473685,
            "unit": "ns",
            "range": "± 5941.733772803667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5039604.602678572,
            "unit": "ns",
            "range": "± 18784.383239001392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1650915.2479166666,
            "unit": "ns",
            "range": "± 1817.138931926742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082925.6548549107,
            "unit": "ns",
            "range": "± 1096.964589677648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669255.5341145834,
            "unit": "ns",
            "range": "± 7496.594559082867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829125.8294020433,
            "unit": "ns",
            "range": "± 605.6041473985304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758137.6923828125,
            "unit": "ns",
            "range": "± 304.49083606223496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281205.28571428574,
            "unit": "ns",
            "range": "± 10148.99092012916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269055.4285714286,
            "unit": "ns",
            "range": "± 11569.381823443437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250657.60317460317,
            "unit": "ns",
            "range": "± 11439.91771561272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4418788.928571428,
            "unit": "ns",
            "range": "± 64516.63082846192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174690.8666666667,
            "unit": "ns",
            "range": "± 74233.65084637124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21107.59375,
            "unit": "ns",
            "range": "± 1477.5580606857277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88942.26041666667,
            "unit": "ns",
            "range": "± 5121.583873527266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75251.05263157895,
            "unit": "ns",
            "range": "± 5784.511090924646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82516.9693877551,
            "unit": "ns",
            "range": "± 13460.114521696967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5597.935483870968,
            "unit": "ns",
            "range": "± 667.3569836440713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20309.73404255319,
            "unit": "ns",
            "range": "± 1616.3968570477377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558410.2,
            "unit": "ns",
            "range": "± 110449.6921447218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2929316.8,
            "unit": "ns",
            "range": "± 85898.51403812885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948203.4725274725,
            "unit": "ns",
            "range": "± 108367.21897842854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5056511.115384615,
            "unit": "ns",
            "range": "± 120802.27113902352"
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
          "id": "e6a9c088de78199baade8ba9db605f9b638d2f6d",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:55+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/e6a9c088de78199baade8ba9db605f9b638d2f6d"
        },
        "date": 1691649514930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343227.8,
            "unit": "ns",
            "range": "± 56123.25011233249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394860.7027027025,
            "unit": "ns",
            "range": "± 112006.0629608616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285118.2,
            "unit": "ns",
            "range": "± 68552.95693758011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3920498.16,
            "unit": "ns",
            "range": "± 103981.83232888971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6104712.066666666,
            "unit": "ns",
            "range": "± 86521.54257051217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911401.333333333,
            "unit": "ns",
            "range": "± 56675.802977066305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20519325.85714286,
            "unit": "ns",
            "range": "± 73732.0473073403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51106648.46666667,
            "unit": "ns",
            "range": "± 385920.0113481821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103442331.4,
            "unit": "ns",
            "range": "± 400160.4094814978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207778904.53333333,
            "unit": "ns",
            "range": "± 1288355.324302925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48784.10526315789,
            "unit": "ns",
            "range": "± 4459.21876678846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5014799.155048077,
            "unit": "ns",
            "range": "± 25263.873926840854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575814.8037109375,
            "unit": "ns",
            "range": "± 3783.565695175617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081705.3640625,
            "unit": "ns",
            "range": "± 881.0297090785456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509588.0890625,
            "unit": "ns",
            "range": "± 3674.758936120836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787753.2822963169,
            "unit": "ns",
            "range": "± 815.8189736394169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731541.6485877404,
            "unit": "ns",
            "range": "± 475.38856864688756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267556.5,
            "unit": "ns",
            "range": "± 11283.122198957333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256985.8,
            "unit": "ns",
            "range": "± 4744.480916963264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234230.6049382716,
            "unit": "ns",
            "range": "± 12339.402842803023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4264756.142857143,
            "unit": "ns",
            "range": "± 35539.82548950087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3902072.8,
            "unit": "ns",
            "range": "± 51693.77953072718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19562.79381443299,
            "unit": "ns",
            "range": "± 2574.8655544923777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86051.21212121213,
            "unit": "ns",
            "range": "± 6924.746208084609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69577.09433962264,
            "unit": "ns",
            "range": "± 2900.9375358808966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79794.59183673469,
            "unit": "ns",
            "range": "± 12755.144490193197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4882.094736842106,
            "unit": "ns",
            "range": "± 528.1314325794173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18245.329896907217,
            "unit": "ns",
            "range": "± 1854.4015416123784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348105.4736842106,
            "unit": "ns",
            "range": "± 97598.62028158482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547003.9423076925,
            "unit": "ns",
            "range": "± 103423.79639692922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1748313.948979592,
            "unit": "ns",
            "range": "± 113452.42790988149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4620917.586206896,
            "unit": "ns",
            "range": "± 118765.21660718358"
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
          "id": "dfa6d07a983fdb8631ce260e4dc6379cbab6bb43",
          "message": "Release 3.1.2",
          "timestamp": "2023-08-10T15:24:33+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/greymistcube/libplanet/commit/dfa6d07a983fdb8631ce260e4dc6379cbab6bb43"
        },
        "date": 1691649746835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3518062.052631579,
            "unit": "ns",
            "range": "± 319471.9665364846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660103.74,
            "unit": "ns",
            "range": "± 341760.12697878893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4547559.91,
            "unit": "ns",
            "range": "± 335934.3263977425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4266479.11,
            "unit": "ns",
            "range": "± 338902.3580273869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7219143.456521739,
            "unit": "ns",
            "range": "± 406633.524910787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8536618.591836736,
            "unit": "ns",
            "range": "± 522520.77901076543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22934532.13,
            "unit": "ns",
            "range": "± 1469050.362705996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56234184.18965517,
            "unit": "ns",
            "range": "± 2457271.826677033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111569181.53658536,
            "unit": "ns",
            "range": "± 3664485.1655375417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220007854.8888889,
            "unit": "ns",
            "range": "± 6137650.560349202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51421.063829787236,
            "unit": "ns",
            "range": "± 4922.083824832491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5389856.721788194,
            "unit": "ns",
            "range": "± 149862.76856853339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1641122.8314302885,
            "unit": "ns",
            "range": "± 18023.75587148307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160694.014073989,
            "unit": "ns",
            "range": "± 37455.16377998193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785579.927441406,
            "unit": "ns",
            "range": "± 98027.91410219113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870861.3198982008,
            "unit": "ns",
            "range": "± 27235.949932798118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802376.0744190705,
            "unit": "ns",
            "range": "± 27895.02734507033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291492.52,
            "unit": "ns",
            "range": "± 32942.20186058969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291438.53,
            "unit": "ns",
            "range": "± 29880.8648210462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248843.13,
            "unit": "ns",
            "range": "± 28198.735807917838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4578545.46,
            "unit": "ns",
            "range": "± 329892.6434878511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4213112.32,
            "unit": "ns",
            "range": "± 337305.08130369225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19020.287234042553,
            "unit": "ns",
            "range": "± 1807.9812518198448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87929.03125,
            "unit": "ns",
            "range": "± 9524.51263839852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79425.62105263158,
            "unit": "ns",
            "range": "± 8698.311688934235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90770.1649484536,
            "unit": "ns",
            "range": "± 14499.01598434098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5706.715789473684,
            "unit": "ns",
            "range": "± 564.8041773841562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19089.536842105263,
            "unit": "ns",
            "range": "± 1928.9538770531638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532306.0520833333,
            "unit": "ns",
            "range": "± 119366.74763137344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3174839.0707070706,
            "unit": "ns",
            "range": "± 195758.10818827947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948439.224489796,
            "unit": "ns",
            "range": "± 149777.39497024508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5218839.12,
            "unit": "ns",
            "range": "± 417452.9092149023"
          }
        ]
      }
    ]
  }
}