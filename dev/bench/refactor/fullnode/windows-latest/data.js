window.BENCHMARK_DATA = {
  "lastUpdate": 1703671041875,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662055765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928790.9090909091,
            "unit": "ns",
            "range": "± 81126.88989139687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689536.8421052631,
            "unit": "ns",
            "range": "± 85479.92488236485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1310811.111111111,
            "unit": "ns",
            "range": "± 132960.01385170923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5263645.333333333,
            "unit": "ns",
            "range": "± 263477.5431701058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33924.637681159424,
            "unit": "ns",
            "range": "± 1639.1717597527766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5201213.333333333,
            "unit": "ns",
            "range": "± 59419.96858520431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13157435.714285715,
            "unit": "ns",
            "range": "± 109296.3691925826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32608036.363636363,
            "unit": "ns",
            "range": "± 778502.4124778075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65162440,
            "unit": "ns",
            "range": "± 685324.1118519866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134742453.33333334,
            "unit": "ns",
            "range": "± 1976825.506016678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294138.309151786,
            "unit": "ns",
            "range": "± 9695.321326121351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049973.2291666667,
            "unit": "ns",
            "range": "± 2937.654403261634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735656.4034598215,
            "unit": "ns",
            "range": "± 1352.7755384789161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1883739.7686298077,
            "unit": "ns",
            "range": "± 1673.9219983568628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620679.4270833334,
            "unit": "ns",
            "range": "± 1536.6539888969196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558456.4518229166,
            "unit": "ns",
            "range": "± 1840.8799234656278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098886.8852459015,
            "unit": "ns",
            "range": "± 89729.01328520566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245383.3333333335,
            "unit": "ns",
            "range": "± 70728.73261897302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778435.714285714,
            "unit": "ns",
            "range": "± 79429.99346867569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588220.3703703703,
            "unit": "ns",
            "range": "± 101781.80580198539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5735422.222222222,
            "unit": "ns",
            "range": "± 121376.70847191862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169635.29411764705,
            "unit": "ns",
            "range": "± 8921.332191283256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161251.31578947368,
            "unit": "ns",
            "range": "± 7830.2233841451825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143193.33333333334,
            "unit": "ns",
            "range": "± 4060.145515766079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2668342.8571428573,
            "unit": "ns",
            "range": "± 43017.96966717181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2445178.5714285714,
            "unit": "ns",
            "range": "± 26390.679548525593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10600,
            "unit": "ns",
            "range": "± 1472.0554909449074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51686.81318681319,
            "unit": "ns",
            "range": "± 5088.77214597018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44428.813559322036,
            "unit": "ns",
            "range": "± 1961.7946434989701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56168.68686868687,
            "unit": "ns",
            "range": "± 14787.299062513532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2282.6530612244896,
            "unit": "ns",
            "range": "± 420.60964840424015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10140.90909090909,
            "unit": "ns",
            "range": "± 1209.315980654283"
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
          "id": "4d1143350b41f9af8f65149463229080bc3d9fab",
          "message": "Changelog",
          "timestamp": "2023-12-27T16:18:16+09:00",
          "tree_id": "58b8e3af75d02d34e4efe5417c31029d7f1e7d65",
          "url": "https://github.com/greymistcube/libplanet/commit/4d1143350b41f9af8f65149463229080bc3d9fab"
        },
        "date": 1703662214019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977753.0303030303,
            "unit": "ns",
            "range": "± 122512.63862710909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776654.5454545454,
            "unit": "ns",
            "range": "± 93839.77774455422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1367230.5263157894,
            "unit": "ns",
            "range": "± 108256.5531146879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5275536.363636363,
            "unit": "ns",
            "range": "± 195926.2724300389"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34982.954545454544,
            "unit": "ns",
            "range": "± 2470.3865205931897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5051838.461538462,
            "unit": "ns",
            "range": "± 37830.709273057044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13059764.285714285,
            "unit": "ns",
            "range": "± 147082.6277831763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33408080.769230768,
            "unit": "ns",
            "range": "± 443141.7199659258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66162061.76470588,
            "unit": "ns",
            "range": "± 1306330.1788226976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132296035.71428572,
            "unit": "ns",
            "range": "± 1356275.7415392757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3289687.7864583335,
            "unit": "ns",
            "range": "± 5895.4118238755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068069.4921875,
            "unit": "ns",
            "range": "± 2330.197039236026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738290.9528459822,
            "unit": "ns",
            "range": "± 1724.5142626452787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2030752.3995535714,
            "unit": "ns",
            "range": "± 4961.858637905559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624984.7726004465,
            "unit": "ns",
            "range": "± 953.4506707983057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557635.1186899039,
            "unit": "ns",
            "range": "± 708.2696383449914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218209.302325581,
            "unit": "ns",
            "range": "± 72050.6925182458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292312.5,
            "unit": "ns",
            "range": "± 58603.70082170579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834600,
            "unit": "ns",
            "range": "± 70669.94318354315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702721.4285714286,
            "unit": "ns",
            "range": "± 43683.97309648592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6198196.153846154,
            "unit": "ns",
            "range": "± 168671.89091432927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181383.07692307694,
            "unit": "ns",
            "range": "± 7634.943705399235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171011.320754717,
            "unit": "ns",
            "range": "± 7058.618855352503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141943.47826086957,
            "unit": "ns",
            "range": "± 3429.660212026911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2713314.285714286,
            "unit": "ns",
            "range": "± 31692.45499005565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472273.3333333335,
            "unit": "ns",
            "range": "± 34637.705851667866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12736.263736263736,
            "unit": "ns",
            "range": "± 1533.0808838208757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59391.30434782609,
            "unit": "ns",
            "range": "± 5806.507379682777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45496.93877551021,
            "unit": "ns",
            "range": "± 2826.8030130455563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65634.34343434343,
            "unit": "ns",
            "range": "± 15122.015047781795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2759.183673469388,
            "unit": "ns",
            "range": "± 580.5856862790708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11185.106382978724,
            "unit": "ns",
            "range": "± 1585.8214144264302"
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
          "id": "295aa9e4940acdb6ed9c39d6636e5cfa1fc1ca59",
          "message": "Changed FullNode.ChildrenCount from 17 to 16",
          "timestamp": "2023-12-27T18:46:20+09:00",
          "tree_id": "39d2987c5d83e2901aa2881ee4f52dc44c8e8d4a",
          "url": "https://github.com/greymistcube/libplanet/commit/295aa9e4940acdb6ed9c39d6636e5cfa1fc1ca59"
        },
        "date": 1703671022985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938970.1030927835,
            "unit": "ns",
            "range": "± 91654.7691123104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1672288.1355932204,
            "unit": "ns",
            "range": "± 74116.54635110692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1317140,
            "unit": "ns",
            "range": "± 104288.5261227287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5230440.384615385,
            "unit": "ns",
            "range": "± 212558.1925023102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34728.75,
            "unit": "ns",
            "range": "± 1828.480295183248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5057785.714285715,
            "unit": "ns",
            "range": "± 43445.38316877086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12944192.307692308,
            "unit": "ns",
            "range": "± 90524.85350755394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31786453.846153848,
            "unit": "ns",
            "range": "± 212553.7054306692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64815828.571428575,
            "unit": "ns",
            "range": "± 516378.9565940762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127637600,
            "unit": "ns",
            "range": "± 1211513.5726299838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307392.1875,
            "unit": "ns",
            "range": "± 6622.3881900536735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069671.09375,
            "unit": "ns",
            "range": "± 1959.2157749649398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725893.1039663461,
            "unit": "ns",
            "range": "± 1449.8017847235308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944297.5130208333,
            "unit": "ns",
            "range": "± 5058.054842723435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608942.67578125,
            "unit": "ns",
            "range": "± 1173.9167001557744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567703.22265625,
            "unit": "ns",
            "range": "± 1392.30839996047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185338.4615384615,
            "unit": "ns",
            "range": "± 27613.388614388325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265189.189189189,
            "unit": "ns",
            "range": "± 75659.0113006441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2782433.3333333335,
            "unit": "ns",
            "range": "± 59208.4180223208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2629192.405063291,
            "unit": "ns",
            "range": "± 133514.35894367882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5983305.263157895,
            "unit": "ns",
            "range": "± 199563.42884835554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168821.69811320756,
            "unit": "ns",
            "range": "± 7014.7201643426115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159386.95652173914,
            "unit": "ns",
            "range": "± 6037.350732294281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137735.29411764705,
            "unit": "ns",
            "range": "± 4084.552002654464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2657673.3333333335,
            "unit": "ns",
            "range": "± 39857.41491629285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2496046.6666666665,
            "unit": "ns",
            "range": "± 43291.91390460589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10018.279569892473,
            "unit": "ns",
            "range": "± 1426.8349159986433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53765.625,
            "unit": "ns",
            "range": "± 6675.16730521652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44660.9756097561,
            "unit": "ns",
            "range": "± 2321.757321755693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52890.52631578947,
            "unit": "ns",
            "range": "± 10294.607901600933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2434.020618556701,
            "unit": "ns",
            "range": "± 382.93999691480843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10320.430107526881,
            "unit": "ns",
            "range": "± 1322.6750841435394"
          }
        ]
      }
    ]
  }
}