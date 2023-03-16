window.BENCHMARK_DATA = {
  "lastUpdate": 1678931282345,
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
          "id": "393b0e52a14ff970955577d3003f68d1a0a90a21",
          "message": "Changelog",
          "timestamp": "2023-03-16T10:37:12+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/greymistcube/libplanet/commit/393b0e52a14ff970955577d3003f68d1a0a90a21"
        },
        "date": 1678931261730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88695.25287356322,
            "unit": "ns",
            "range": "± 5040.495927101356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198411.04395604396,
            "unit": "ns",
            "range": "± 11113.517684845772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170109.33333333334,
            "unit": "ns",
            "range": "± 4731.445339428535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777523.066666667,
            "unit": "ns",
            "range": "± 48703.37613035915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9301312.5,
            "unit": "ns",
            "range": "± 115081.0803261703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16037.939024390244,
            "unit": "ns",
            "range": "± 820.8440604309169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48985.79120879121,
            "unit": "ns",
            "range": "± 3879.5009487661437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41054.38461538462,
            "unit": "ns",
            "range": "± 1692.290641076857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95052.87755102041,
            "unit": "ns",
            "range": "± 17843.754190576536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6031.631578947368,
            "unit": "ns",
            "range": "± 765.2336043359093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19492.797872340427,
            "unit": "ns",
            "range": "± 2777.3963733358405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6016435.436458333,
            "unit": "ns",
            "range": "± 56625.68189096482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885991.5194010416,
            "unit": "ns",
            "range": "± 14826.277147081768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334975.2250279018,
            "unit": "ns",
            "range": "± 4777.435383693039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597704.2315104166,
            "unit": "ns",
            "range": "± 19183.691592984007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809833.0228515625,
            "unit": "ns",
            "range": "± 2075.1416375887998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750085.3445012019,
            "unit": "ns",
            "range": "± 1599.8388362351752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109706.15,
            "unit": "ns",
            "range": "± 2535.8801498119988"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5056631.4,
            "unit": "ns",
            "range": "± 58183.23112041043"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6144534.214285715,
            "unit": "ns",
            "range": "± 27660.87944866588"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26956624,
            "unit": "ns",
            "range": "± 552750.2321419684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6904106.555555556,
            "unit": "ns",
            "range": "± 139382.9002877124"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31533355.4,
            "unit": "ns",
            "range": "± 697327.0661744858"
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
          "id": "8d0d10e26dfb58f88d15b33cf03b64cc2806949b",
          "message": "Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:33:53+09:00",
          "tree_id": "e680238104654ec491383068a58090a40d44d206",
          "url": "https://github.com/greymistcube/libplanet/commit/8d0d10e26dfb58f88d15b33cf03b64cc2806949b"
        },
        "date": 1678931275610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104698.3956043956,
            "unit": "ns",
            "range": "± 8953.254553983425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215748.0652173913,
            "unit": "ns",
            "range": "± 12883.32923050692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194092.12,
            "unit": "ns",
            "range": "± 11735.59410320378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4000599,
            "unit": "ns",
            "range": "± 70559.34200474703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10236992.133333333,
            "unit": "ns",
            "range": "± 123282.71878251844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22475.757894736842,
            "unit": "ns",
            "range": "± 2918.8816596239626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57605.97802197802,
            "unit": "ns",
            "range": "± 4667.22235971966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45646.43298969072,
            "unit": "ns",
            "range": "± 3732.0700101374046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106146.78723404255,
            "unit": "ns",
            "range": "± 16146.53617894252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6981.260416666667,
            "unit": "ns",
            "range": "± 824.0112958447987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21854.852631578946,
            "unit": "ns",
            "range": "± 2284.363065790853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6090977.391145834,
            "unit": "ns",
            "range": "± 32594.642702287896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845970.3052455357,
            "unit": "ns",
            "range": "± 1370.7007464105839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353759.8442708333,
            "unit": "ns",
            "range": "± 3016.948336290312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636866.640625,
            "unit": "ns",
            "range": "± 4677.586095261046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830865.975016276,
            "unit": "ns",
            "range": "± 366.8736514059075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767590.2259114584,
            "unit": "ns",
            "range": "± 231.9403651656811"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113587.27368421052,
            "unit": "ns",
            "range": "± 6972.278333395954"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4964094.700892857,
            "unit": "ns",
            "range": "± 264157.1884843774"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6066714.117647059,
            "unit": "ns",
            "range": "± 246860.56882982724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28161084.64285714,
            "unit": "ns",
            "range": "± 382482.2577778773"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6838644.852941177,
            "unit": "ns",
            "range": "± 219683.4973261819"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31263403.64285714,
            "unit": "ns",
            "range": "± 448545.34947412246"
          }
        ]
      }
    ]
  }
}