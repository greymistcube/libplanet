window.BENCHMARK_DATA = {
  "lastUpdate": 1679990614972,
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
          "id": "49df5491dc9da878c83628f6979a3f784846f5e2",
          "message": "Changelog",
          "timestamp": "2023-03-28T16:04:30+09:00",
          "tree_id": "6cf6e83ec9a821dae0fca3fcc185a2f6d8aa66a3",
          "url": "https://github.com/greymistcube/libplanet/commit/49df5491dc9da878c83628f6979a3f784846f5e2"
        },
        "date": 1679988118753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139084.38372093023,
            "unit": "ns",
            "range": "± 13323.914728715612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 128431.09090909091,
            "unit": "ns",
            "range": "± 29019.66158929075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258178.193877551,
            "unit": "ns",
            "range": "± 47941.396210923456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222999.1489361702,
            "unit": "ns",
            "range": "± 24171.29026810301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3850347.111111111,
            "unit": "ns",
            "range": "± 263243.66212524683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10559026.31707317,
            "unit": "ns",
            "range": "± 378275.2877557189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23109.521276595744,
            "unit": "ns",
            "range": "± 4118.4525828230435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66108.9387755102,
            "unit": "ns",
            "range": "± 18982.619814096317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59489.230337078654,
            "unit": "ns",
            "range": "± 7261.804730862903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131094.82631578948,
            "unit": "ns",
            "range": "± 21415.9525495634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8048.695652173913,
            "unit": "ns",
            "range": "± 872.1210501614639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19421.440860215054,
            "unit": "ns",
            "range": "± 3052.616039393829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5464854.733710106,
            "unit": "ns",
            "range": "± 427081.4012281591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7705605.893939394,
            "unit": "ns",
            "range": "± 1003680.7505582132"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30659570.295918368,
            "unit": "ns",
            "range": "± 2326673.4501358615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7091063.273195877,
            "unit": "ns",
            "range": "± 482123.8550270845"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32734461.67647059,
            "unit": "ns",
            "range": "± 1566787.1213276335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7341429.759375,
            "unit": "ns",
            "range": "± 225131.65350779422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080135.7826450893,
            "unit": "ns",
            "range": "± 59405.50567670411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354587.916015625,
            "unit": "ns",
            "range": "± 24109.986700343237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604737.5792590724,
            "unit": "ns",
            "range": "± 68193.73657213019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821759.3169921875,
            "unit": "ns",
            "range": "± 14545.809423766255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751685.8126723346,
            "unit": "ns",
            "range": "± 15050.976420014293"
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
          "id": "5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9",
          "message": "Faster key conversion",
          "timestamp": "2023-03-28T16:01:14+09:00",
          "tree_id": "6dcdfab0387850705a9827b22c2659babf5fe297",
          "url": "https://github.com/greymistcube/libplanet/commit/5cadae4f6e7320ccbbc8d29013b15ecf9e224ea9"
        },
        "date": 1679988296259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 155292.22988505746,
            "unit": "ns",
            "range": "± 8441.5047218961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135928.83333333334,
            "unit": "ns",
            "range": "± 20571.215876502807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292980.9895833333,
            "unit": "ns",
            "range": "± 58964.08655819233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273189.1935483871,
            "unit": "ns",
            "range": "± 43420.805425374354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112221.101010101,
            "unit": "ns",
            "range": "± 400068.6924224923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11438609.1875,
            "unit": "ns",
            "range": "± 836942.637856575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29896.38172043011,
            "unit": "ns",
            "range": "± 3819.4871436104754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75213.89247311828,
            "unit": "ns",
            "range": "± 9309.924996735153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75988.59090909091,
            "unit": "ns",
            "range": "± 8886.407042757584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161065.24226804124,
            "unit": "ns",
            "range": "± 35666.811710164104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11974.59793814433,
            "unit": "ns",
            "range": "± 1433.1160009151517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26443.166666666668,
            "unit": "ns",
            "range": "± 2862.224646987822"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5966557.303172831,
            "unit": "ns",
            "range": "± 757431.0720605197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6795864.417582418,
            "unit": "ns",
            "range": "± 642468.3305367763"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30398029.125,
            "unit": "ns",
            "range": "± 2189977.0651566754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7891841.59375,
            "unit": "ns",
            "range": "± 810128.0246877427"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35930542.720430106,
            "unit": "ns",
            "range": "± 2780130.3932737005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7840868.014543269,
            "unit": "ns",
            "range": "± 363270.51416485256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268319.8791065705,
            "unit": "ns",
            "range": "± 78033.5636140245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454297.1750452898,
            "unit": "ns",
            "range": "± 70012.08529559728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3566218.859375,
            "unit": "ns",
            "range": "± 217190.26094397923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933466.1334244792,
            "unit": "ns",
            "range": "± 46901.39311372981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 878813.7437900641,
            "unit": "ns",
            "range": "± 28100.657481142713"
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
          "id": "7a47b09e426b6d75dcc84742b532524d81e5cf53",
          "message": "Cleanup",
          "timestamp": "2023-03-28T16:45:38+09:00",
          "tree_id": "0b287f44514e60c26c243cb104c6f6b16a277ad8",
          "url": "https://github.com/greymistcube/libplanet/commit/7a47b09e426b6d75dcc84742b532524d81e5cf53"
        },
        "date": 1679990596435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141409.45698924732,
            "unit": "ns",
            "range": "± 12868.901083040717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141312.28260869565,
            "unit": "ns",
            "range": "± 26454.80368137994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247808.42696629214,
            "unit": "ns",
            "range": "± 33441.34920916416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226054.5,
            "unit": "ns",
            "range": "± 24555.580872787352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3886717.8333333335,
            "unit": "ns",
            "range": "± 214747.22301834286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11195170.727272727,
            "unit": "ns",
            "range": "± 471943.5021858275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25916.682795698925,
            "unit": "ns",
            "range": "± 4212.056166648915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64796.48888888889,
            "unit": "ns",
            "range": "± 7549.403661982881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65091.5,
            "unit": "ns",
            "range": "± 3793.519552829687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131247.53846153847,
            "unit": "ns",
            "range": "± 12560.616232501132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9554.21875,
            "unit": "ns",
            "range": "± 878.0083527132361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24859.670103092783,
            "unit": "ns",
            "range": "± 3349.4757510244835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5525018.290779533,
            "unit": "ns",
            "range": "± 626597.2046892178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6734153.424731183,
            "unit": "ns",
            "range": "± 658082.4911657161"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29975612.376923077,
            "unit": "ns",
            "range": "± 1386126.1078838739"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8220651.776595744,
            "unit": "ns",
            "range": "± 1010461.8785739264"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34878460.12658228,
            "unit": "ns",
            "range": "± 1800603.9078044698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7034373.711838942,
            "unit": "ns",
            "range": "± 66259.52165943668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2144647.4329144023,
            "unit": "ns",
            "range": "± 71835.82777583277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346114.2465820312,
            "unit": "ns",
            "range": "± 15178.207188061171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2819859.825420673,
            "unit": "ns",
            "range": "± 40919.13619001859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874147.2684244792,
            "unit": "ns",
            "range": "± 12051.52592917061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736935.9655412947,
            "unit": "ns",
            "range": "± 12486.65576069527"
          }
        ]
      }
    ]
  }
}