window.BENCHMARK_DATA = {
  "lastUpdate": 1680059677076,
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
          "id": "7669de38b6d6e1af3fa179eae36a5abf91f81fa4",
          "message": "Introduce state cache",
          "timestamp": "2023-03-29T11:51:25+09:00",
          "tree_id": "f1c8e9d1a35ba2d4258366bbd2a7bc2347b3cd52",
          "url": "https://github.com/greymistcube/libplanet/commit/7669de38b6d6e1af3fa179eae36a5abf91f81fa4"
        },
        "date": 1680059454949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127196.67204301075,
            "unit": "ns",
            "range": "± 11898.365200662665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108660.47368421052,
            "unit": "ns",
            "range": "± 15814.460058885581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238039.7659574468,
            "unit": "ns",
            "range": "± 32570.88003024534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247660.7032967033,
            "unit": "ns",
            "range": "± 32023.809113947467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256936.3,
            "unit": "ns",
            "range": "± 449684.22794073075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11277922.48924731,
            "unit": "ns",
            "range": "± 741914.8299364418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21562.43010752688,
            "unit": "ns",
            "range": "± 3481.568397812817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66538.69565217392,
            "unit": "ns",
            "range": "± 13173.185382250784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61876.28409090909,
            "unit": "ns",
            "range": "± 4403.308990723904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140386.65656565657,
            "unit": "ns",
            "range": "± 27034.529778981643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8288.032608695652,
            "unit": "ns",
            "range": "± 960.1439275245929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.602272727272,
            "unit": "ns",
            "range": "± 3351.3075113151094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6028723.629964192,
            "unit": "ns",
            "range": "± 735006.2989354426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6592885.18,
            "unit": "ns",
            "range": "± 332178.83924066357"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31640003.755102042,
            "unit": "ns",
            "range": "± 2555834.8889472983"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8085396.670212766,
            "unit": "ns",
            "range": "± 747817.2068287177"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35442541.91919192,
            "unit": "ns",
            "range": "± 2645115.5983439097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8056127.134923986,
            "unit": "ns",
            "range": "± 268739.72112861526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2249963.7143554688,
            "unit": "ns",
            "range": "± 69533.10200911916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307913.6512920673,
            "unit": "ns",
            "range": "± 14981.547638534244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3049283.124798647,
            "unit": "ns",
            "range": "± 223240.3428329294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832946.3278245192,
            "unit": "ns",
            "range": "± 13632.061194586842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737867.5348074777,
            "unit": "ns",
            "range": "± 10793.305789680659"
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
          "id": "ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:53:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/ceddedecb2cfaa43bd63b3ac4bbbafeafb27fcf7"
        },
        "date": 1680059537352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133077.89361702127,
            "unit": "ns",
            "range": "± 11311.027292808933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112583.83157894737,
            "unit": "ns",
            "range": "± 26451.628968320943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244334.22826086957,
            "unit": "ns",
            "range": "± 39141.55466461072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245359.13157894736,
            "unit": "ns",
            "range": "± 27938.04978041658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155599.9226804124,
            "unit": "ns",
            "range": "± 334133.6367917856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11169764.602040816,
            "unit": "ns",
            "range": "± 730009.8566235816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27405.33870967742,
            "unit": "ns",
            "range": "± 5413.9372582942015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69517.42105263157,
            "unit": "ns",
            "range": "± 11751.01014180243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64485.2037037037,
            "unit": "ns",
            "range": "± 5155.100060727349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133475.4255319149,
            "unit": "ns",
            "range": "± 19400.28295076295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8643.649484536083,
            "unit": "ns",
            "range": "± 1113.7130843230852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20946.443298969072,
            "unit": "ns",
            "range": "± 5441.76154645923"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5029640.693800403,
            "unit": "ns",
            "range": "± 302630.4952178898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7305667.52247191,
            "unit": "ns",
            "range": "± 855913.0168222011"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33231014.247311827,
            "unit": "ns",
            "range": "± 4276442.668646438"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9096725.867346939,
            "unit": "ns",
            "range": "± 1004498.8672391701"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34649912.05319149,
            "unit": "ns",
            "range": "± 2022375.7967352625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7064114.7284375,
            "unit": "ns",
            "range": "± 187364.76138452216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2097807.03859375,
            "unit": "ns",
            "range": "± 50277.26413360793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372847.217923678,
            "unit": "ns",
            "range": "± 18096.95547428287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909611.6223655525,
            "unit": "ns",
            "range": "± 106282.62105234843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887440.1435241699,
            "unit": "ns",
            "range": "± 27253.685920125277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784863.9141845703,
            "unit": "ns",
            "range": "± 20363.3845884267"
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
          "id": "68acec02406c11cbbb4a120f0d9af2fbf5d3c2cd",
          "message": "Changelog",
          "timestamp": "2023-03-29T11:54:47+09:00",
          "tree_id": "8a4fce51c0995d6db5798e321be3c78cbac9254d",
          "url": "https://github.com/greymistcube/libplanet/commit/68acec02406c11cbbb4a120f0d9af2fbf5d3c2cd"
        },
        "date": 1680059661801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148280.68539325843,
            "unit": "ns",
            "range": "± 14649.41465600364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119460.25510204081,
            "unit": "ns",
            "range": "± 15507.416095533943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227202.62987012987,
            "unit": "ns",
            "range": "± 10759.094293165555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265661.0104166667,
            "unit": "ns",
            "range": "± 45886.99323761978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3986748.6326530613,
            "unit": "ns",
            "range": "± 354113.712495249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11068057.142105263,
            "unit": "ns",
            "range": "± 658173.2118222718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23336.383720930233,
            "unit": "ns",
            "range": "± 2515.8193621145974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63543.97252747253,
            "unit": "ns",
            "range": "± 6150.96427551659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62804.822222222225,
            "unit": "ns",
            "range": "± 5170.203200704907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139517.2525773196,
            "unit": "ns",
            "range": "± 26445.309305649604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8973.522222222222,
            "unit": "ns",
            "range": "± 1173.9817196840459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22308.988764044945,
            "unit": "ns",
            "range": "± 3558.731268093825"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5646205.049069523,
            "unit": "ns",
            "range": "± 336883.6152931496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8389547.494736843,
            "unit": "ns",
            "range": "± 2592875.1321406434"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28300185.74509804,
            "unit": "ns",
            "range": "± 1110507.841249396"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7187098.925531914,
            "unit": "ns",
            "range": "± 672085.3861491823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31804264.035714287,
            "unit": "ns",
            "range": "± 1652155.3967342428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7422537.243265086,
            "unit": "ns",
            "range": "± 206611.99506580623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2304170.6857524673,
            "unit": "ns",
            "range": "± 78706.75902727761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396769.0511924343,
            "unit": "ns",
            "range": "± 30002.42026957749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287453.3092151987,
            "unit": "ns",
            "range": "± 180692.50060048836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934198.1488334037,
            "unit": "ns",
            "range": "± 30392.38167635298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808477.2239583334,
            "unit": "ns",
            "range": "± 8847.689776455602"
          }
        ]
      }
    ]
  }
}