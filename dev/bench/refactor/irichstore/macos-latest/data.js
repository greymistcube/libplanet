window.BENCHMARK_DATA = {
  "lastUpdate": 1702894688121,
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
          "id": "17212c88836ceabcca159fcfb0030f387d8f33a7",
          "message": "Removed unnecessary arguments",
          "timestamp": "2023-12-18T18:53:58+09:00",
          "tree_id": "b579df8e713644622da9eabfc1fc07917f64f9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/17212c88836ceabcca159fcfb0030f387d8f33a7"
        },
        "date": 1702894561167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10292464.968421053,
            "unit": "ns",
            "range": "± 1047693.9390073685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23546269.692307692,
            "unit": "ns",
            "range": "± 221018.68081468611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53422554.833333336,
            "unit": "ns",
            "range": "± 1327333.6485873268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113383274,
            "unit": "ns",
            "range": "± 7449137.355421247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233314620.06024095,
            "unit": "ns",
            "range": "± 18012520.153862637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46474.818181818184,
            "unit": "ns",
            "range": "± 7610.537319296269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264071.93434343435,
            "unit": "ns",
            "range": "± 23671.444366389078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288984.7415730337,
            "unit": "ns",
            "range": "± 20809.79158545765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268869.32558139536,
            "unit": "ns",
            "range": "± 15687.293313898324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4942475.555555556,
            "unit": "ns",
            "range": "± 196295.34767107494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4286639.466666667,
            "unit": "ns",
            "range": "± 125069.25584719556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20043.63157894737,
            "unit": "ns",
            "range": "± 4327.074315144055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86266.22826086957,
            "unit": "ns",
            "range": "± 8422.747475452206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91375.05172413793,
            "unit": "ns",
            "range": "± 11124.265597665755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88624.02272727272,
            "unit": "ns",
            "range": "± 9312.878508518195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6747.930107526881,
            "unit": "ns",
            "range": "± 1004.1115518949584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19168.175824175825,
            "unit": "ns",
            "range": "± 3259.940427517747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1151889.36,
            "unit": "ns",
            "range": "± 95406.8218691521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2603461.46,
            "unit": "ns",
            "range": "± 248732.75062113136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561888.1847826086,
            "unit": "ns",
            "range": "± 166293.6086009169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7469697.826086956,
            "unit": "ns",
            "range": "± 816177.0287743967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3652574.382352941,
            "unit": "ns",
            "range": "± 73026.27683399513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779617.273809524,
            "unit": "ns",
            "range": "± 289117.06119483185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455702.131578947,
            "unit": "ns",
            "range": "± 224426.02353927033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4197596.7,
            "unit": "ns",
            "range": "± 95950.33992101277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17711199.872340426,
            "unit": "ns",
            "range": "± 3102683.580936771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857589.715238321,
            "unit": "ns",
            "range": "± 462848.8333123315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588274.4853515625,
            "unit": "ns",
            "range": "± 137910.47133921742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025318.4130859375,
            "unit": "ns",
            "range": "± 43120.23832589588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2349348.2679859204,
            "unit": "ns",
            "range": "± 215304.101169219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 721812.5357421875,
            "unit": "ns",
            "range": "± 66858.12926186346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 671011.2781051378,
            "unit": "ns",
            "range": "± 29621.15580584052"
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
          "id": "20a83c7e16aa91de2331c52fadddcf7473abc4e5",
          "message": "Removed updated addresses from IRichStore",
          "timestamp": "2023-12-18T18:50:02+09:00",
          "tree_id": "4c182bfa4a5a7e0262c2321d7e3df1f7ed1be87e",
          "url": "https://github.com/greymistcube/libplanet/commit/20a83c7e16aa91de2331c52fadddcf7473abc4e5"
        },
        "date": 1702894595673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9826289.142857144,
            "unit": "ns",
            "range": "± 683509.8010720003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32963056.715053763,
            "unit": "ns",
            "range": "± 4902052.003531289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 81482969.26344086,
            "unit": "ns",
            "range": "± 15563326.901260307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 172891128.1736842,
            "unit": "ns",
            "range": "± 38184397.25660511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 350964713.3494624,
            "unit": "ns",
            "range": "± 59494727.56653869"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59140.64367816092,
            "unit": "ns",
            "range": "± 10200.78860947914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 437590.55555555556,
            "unit": "ns",
            "range": "± 195015.86683683068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 493292.3241758242,
            "unit": "ns",
            "range": "± 277899.97437385813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 416735.989010989,
            "unit": "ns",
            "range": "± 140274.83674625598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5412355.425287357,
            "unit": "ns",
            "range": "± 616774.9316231643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5889719.785714285,
            "unit": "ns",
            "range": "± 1368694.5580475116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27659.416666666668,
            "unit": "ns",
            "range": "± 7017.466291395861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116202.57575757576,
            "unit": "ns",
            "range": "± 26412.793987118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99096.65882352942,
            "unit": "ns",
            "range": "± 8869.027874673566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104011.17894736842,
            "unit": "ns",
            "range": "± 15827.589961149344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8869.581632653062,
            "unit": "ns",
            "range": "± 2211.9558631876203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28689.104166666668,
            "unit": "ns",
            "range": "± 5753.864366400186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1980563.4742268042,
            "unit": "ns",
            "range": "± 540036.6250441972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4209207.928571428,
            "unit": "ns",
            "range": "± 1002691.5607664774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1961225.6206896552,
            "unit": "ns",
            "range": "± 226843.0730803577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9865446.136842106,
            "unit": "ns",
            "range": "± 1647843.0460710367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 6879924.231578947,
            "unit": "ns",
            "range": "± 1651876.4360419929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6196605.078651685,
            "unit": "ns",
            "range": "± 1826076.2802414275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6467656.873737373,
            "unit": "ns",
            "range": "± 1626067.0658249066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8170286.683673469,
            "unit": "ns",
            "range": "± 2452727.0551945553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28487994.696629215,
            "unit": "ns",
            "range": "± 7611233.440782039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5387744.0878125,
            "unit": "ns",
            "range": "± 656379.4824454171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1419944.7398726852,
            "unit": "ns",
            "range": "± 38397.558005699844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991219.1510742188,
            "unit": "ns",
            "range": "± 95207.03020606039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2120730.7421875,
            "unit": "ns",
            "range": "± 102881.68316316871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801964.9979355126,
            "unit": "ns",
            "range": "± 34369.040842345246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568927.1186523438,
            "unit": "ns",
            "range": "± 12583.580373015198"
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
          "id": "35a35f847e003ae3e4102cc9a81797f633097d07",
          "message": "Changelog",
          "timestamp": "2023-12-18T18:56:37+09:00",
          "tree_id": "9fc809af09fa515759b8076fcff9f46aa92a3c88",
          "url": "https://github.com/greymistcube/libplanet/commit/35a35f847e003ae3e4102cc9a81797f633097d07"
        },
        "date": 1702894670391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8594569.51,
            "unit": "ns",
            "range": "± 871797.1596515179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20731899.3,
            "unit": "ns",
            "range": "± 1646919.9079073656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47473408.78125,
            "unit": "ns",
            "range": "± 1373681.3447484763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96227144.25,
            "unit": "ns",
            "range": "± 2985887.3209688957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191432346.76923078,
            "unit": "ns",
            "range": "± 1832214.0952520238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37921.47727272727,
            "unit": "ns",
            "range": "± 4914.545630889821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259143.44444444444,
            "unit": "ns",
            "range": "± 37861.65586636843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242459.36956521738,
            "unit": "ns",
            "range": "± 30365.07502454977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241276.875,
            "unit": "ns",
            "range": "± 27832.086161668267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144273.7,
            "unit": "ns",
            "range": "± 429033.248451314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4090800.06,
            "unit": "ns",
            "range": "± 379767.02797641186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16169.477777777778,
            "unit": "ns",
            "range": "± 1604.373399529736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87891.78350515464,
            "unit": "ns",
            "range": "± 17700.953785640813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83237.65979381443,
            "unit": "ns",
            "range": "± 12636.237343686242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80718.42631578947,
            "unit": "ns",
            "range": "± 12418.023975333583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6200.214285714285,
            "unit": "ns",
            "range": "± 1575.2660518212847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19324.607526881722,
            "unit": "ns",
            "range": "± 5148.167946532398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1089405.4897959183,
            "unit": "ns",
            "range": "± 131720.661957964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2240003.1428571427,
            "unit": "ns",
            "range": "± 39561.53498928968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552497.0104166667,
            "unit": "ns",
            "range": "± 103372.43021424953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7252886.977777778,
            "unit": "ns",
            "range": "± 560944.513409343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2868879.8095238097,
            "unit": "ns",
            "range": "± 95998.87177652284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964252.4237288134,
            "unit": "ns",
            "range": "± 111390.67618246295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3597141.447368421,
            "unit": "ns",
            "range": "± 170504.90005485824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3464040.625,
            "unit": "ns",
            "range": "± 147929.23974111438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14681623.085858585,
            "unit": "ns",
            "range": "± 2913676.45152975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5246410.662382392,
            "unit": "ns",
            "range": "± 402317.97948305885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1670908.20053412,
            "unit": "ns",
            "range": "± 128268.65675110993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043907.0148809524,
            "unit": "ns",
            "range": "± 57598.8349338843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2368117.4452327807,
            "unit": "ns",
            "range": "± 185606.79457254076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757275.7935566804,
            "unit": "ns",
            "range": "± 49242.20008781524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 648026.6578643176,
            "unit": "ns",
            "range": "± 66782.58108061765"
          }
        ]
      }
    ]
  }
}