window.BENCHMARK_DATA = {
  "lastUpdate": 1682994267267,
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
          "id": "36031c4669e9a2e4d73962ccf813eedf68216b4e",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T10:52:11+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/36031c4669e9a2e4d73962ccf813eedf68216b4e"
        },
        "date": 1682993427307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336226.31,
            "unit": "ns",
            "range": "± 23578.633381844975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321349.7474747475,
            "unit": "ns",
            "range": "± 39593.70800929583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258447.28282828283,
            "unit": "ns",
            "range": "± 21953.49128389025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4560319.92,
            "unit": "ns",
            "range": "± 344105.5375768372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4315387.15,
            "unit": "ns",
            "range": "± 273699.3045481646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24247.035353535353,
            "unit": "ns",
            "range": "± 5214.689290278524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90407.59183673469,
            "unit": "ns",
            "range": "± 11354.36036397402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85117.86734693877,
            "unit": "ns",
            "range": "± 9675.066271264284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101272.53684210527,
            "unit": "ns",
            "range": "± 16558.55263153419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5473.978947368421,
            "unit": "ns",
            "range": "± 961.2741099424705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.677083333332,
            "unit": "ns",
            "range": "± 2559.2472803532714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3319130.32,
            "unit": "ns",
            "range": "± 366414.8745696834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710574.868686869,
            "unit": "ns",
            "range": "± 337200.3763285493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312573.606060606,
            "unit": "ns",
            "range": "± 371528.1044908001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4572032.84,
            "unit": "ns",
            "range": "± 453531.02158793993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7425444.35,
            "unit": "ns",
            "range": "± 666023.7063550492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6766590.839607008,
            "unit": "ns",
            "range": "± 316727.63262851513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965664.1109240302,
            "unit": "ns",
            "range": "± 56231.87002789728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445203.9261507601,
            "unit": "ns",
            "range": "± 48815.496039792364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2772116.6450737845,
            "unit": "ns",
            "range": "± 92105.39378446729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862220.6984570313,
            "unit": "ns",
            "range": "± 22886.204818279086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798201.034710428,
            "unit": "ns",
            "range": "± 30238.73179531177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51990.04301075269,
            "unit": "ns",
            "range": "± 6216.103401499204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7667209.3838383835,
            "unit": "ns",
            "range": "± 501627.9196671025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21784847.22,
            "unit": "ns",
            "range": "± 1663658.0586143888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54226594.958762884,
            "unit": "ns",
            "range": "± 3475701.589680324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110469996.4,
            "unit": "ns",
            "range": "± 7347864.5741579365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213523971.7846154,
            "unit": "ns",
            "range": "± 9879690.037084159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1528526.9595959596,
            "unit": "ns",
            "range": "± 145851.48265363526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877122.83,
            "unit": "ns",
            "range": "± 254182.83014747265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2339335.72,
            "unit": "ns",
            "range": "± 255528.46413014087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5995859.42,
            "unit": "ns",
            "range": "± 560216.0878249052"
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
          "id": "de9d17c6e23bde9275d8fdfded883f81ca930325",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T11:04:10+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/de9d17c6e23bde9275d8fdfded883f81ca930325"
        },
        "date": 1682993923297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290415.51612903224,
            "unit": "ns",
            "range": "± 8852.930587743127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282098.3846153846,
            "unit": "ns",
            "range": "± 4302.366084270017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249620.89855072464,
            "unit": "ns",
            "range": "± 11927.089884875926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4390651.384615385,
            "unit": "ns",
            "range": "± 63325.15728699832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953043.8,
            "unit": "ns",
            "range": "± 56356.32977783926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22553.617021276597,
            "unit": "ns",
            "range": "± 2636.401119424519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95067.16326530612,
            "unit": "ns",
            "range": "± 6000.211581654103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82627.2564102564,
            "unit": "ns",
            "range": "± 4212.8111274703015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105445.37113402062,
            "unit": "ns",
            "range": "± 14714.8244272001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7096.979381443299,
            "unit": "ns",
            "range": "± 745.4439530041458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21330.08791208791,
            "unit": "ns",
            "range": "± 1217.3461905888348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3534538.9523809524,
            "unit": "ns",
            "range": "± 79431.67269450908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3757230.6129032257,
            "unit": "ns",
            "range": "± 107565.33003952449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353315.428571428,
            "unit": "ns",
            "range": "± 102052.34891445244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4578593.119047619,
            "unit": "ns",
            "range": "± 153575.51740989572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7088792.88,
            "unit": "ns",
            "range": "± 186536.73792230134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6066790.109933035,
            "unit": "ns",
            "range": "± 33861.74248715502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901984.5174479166,
            "unit": "ns",
            "range": "± 2323.4244025583707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368239.4278645834,
            "unit": "ns",
            "range": "± 2763.4440147648093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606380.979073661,
            "unit": "ns",
            "range": "± 1764.632047012797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858786.6662248884,
            "unit": "ns",
            "range": "± 1019.6404943728082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755866.6387369792,
            "unit": "ns",
            "range": "± 458.5127733463369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54241.48936170213,
            "unit": "ns",
            "range": "± 5012.062979087276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8456488.4,
            "unit": "ns",
            "range": "± 134586.6371735534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22200739.8,
            "unit": "ns",
            "range": "± 290232.1473459282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55285457.615384616,
            "unit": "ns",
            "range": "± 361386.9007895228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110694518.6,
            "unit": "ns",
            "range": "± 685783.1134342278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221863945.92857143,
            "unit": "ns",
            "range": "± 739271.2791336599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467553.2040816327,
            "unit": "ns",
            "range": "± 96721.36035971687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708396.103448276,
            "unit": "ns",
            "range": "± 78605.31699952656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345937.4736842103,
            "unit": "ns",
            "range": "± 117893.16787142203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5894224.147368421,
            "unit": "ns",
            "range": "± 335406.5250188693"
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
          "id": "5a01ccd902ade84c3b1fefd131c97a8da597694c",
          "message": "Changelog",
          "timestamp": "2023-05-02T11:11:19+09:00",
          "tree_id": "b4f52824685d8f75d04a2969594c1ccbf26dcfb9",
          "url": "https://github.com/greymistcube/libplanet/commit/5a01ccd902ade84c3b1fefd131c97a8da597694c"
        },
        "date": 1682994260165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277942.85,
            "unit": "ns",
            "range": "± 8912.49696673448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269765.85185185185,
            "unit": "ns",
            "range": "± 6917.304230938656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228970.9375,
            "unit": "ns",
            "range": "± 4351.511346168516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4212282.533333333,
            "unit": "ns",
            "range": "± 23913.203411703835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3883203.714285714,
            "unit": "ns",
            "range": "± 26275.932211900603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18102.391304347828,
            "unit": "ns",
            "range": "± 1085.9658885675672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85892.64383561644,
            "unit": "ns",
            "range": "± 4275.396201165529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72937,
            "unit": "ns",
            "range": "± 1791.4252904959703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83893.68831168831,
            "unit": "ns",
            "range": "± 3730.597695374028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4754.701030927835,
            "unit": "ns",
            "range": "± 633.455818719632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17843.90625,
            "unit": "ns",
            "range": "± 1198.5102601771919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204368.8571428573,
            "unit": "ns",
            "range": "± 21317.647441487545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403801.8260869565,
            "unit": "ns",
            "range": "± 78664.46342111549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4138008.3333333335,
            "unit": "ns",
            "range": "± 52861.857301658936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4126924.9285714286,
            "unit": "ns",
            "range": "± 137569.30844228104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6572425.230769231,
            "unit": "ns",
            "range": "± 93522.77108557915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5972192.941964285,
            "unit": "ns",
            "range": "± 19962.2559717561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850388.9775390625,
            "unit": "ns",
            "range": "± 657.3177880505193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370549.1595552885,
            "unit": "ns",
            "range": "± 993.5844091489571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673369.306640625,
            "unit": "ns",
            "range": "± 4397.278540988551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817994.8639787947,
            "unit": "ns",
            "range": "± 565.0417801101999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747850.6192708333,
            "unit": "ns",
            "range": "± 591.5284427926629"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46368.89473684211,
            "unit": "ns",
            "range": "± 3202.744051104755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7613336.733333333,
            "unit": "ns",
            "range": "± 50788.90211238034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19247547.384615384,
            "unit": "ns",
            "range": "± 93512.55368713735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49977870.4,
            "unit": "ns",
            "range": "± 429218.7022447714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99052621.4,
            "unit": "ns",
            "range": "± 456290.1077462827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198070381.06666666,
            "unit": "ns",
            "range": "± 790673.9760412782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376730.3578947368,
            "unit": "ns",
            "range": "± 90334.09892477703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2551146.4285714286,
            "unit": "ns",
            "range": "± 34339.64850569245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195981.9764705882,
            "unit": "ns",
            "range": "± 116353.01736054894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5131381.764705882,
            "unit": "ns",
            "range": "± 88519.3258401304"
          }
        ]
      }
    ]
  }
}