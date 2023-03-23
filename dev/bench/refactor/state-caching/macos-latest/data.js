window.BENCHMARK_DATA = {
  "lastUpdate": 1679562709333,
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
          "id": "81f62bdf83fd9321842d901f2730764263337718",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:50:45+09:00",
          "tree_id": "3b9228a74d791581247e7096b727c530af6da885",
          "url": "https://github.com/greymistcube/libplanet/commit/81f62bdf83fd9321842d901f2730764263337718"
        },
        "date": 1679562393490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136886.14117647058,
            "unit": "ns",
            "range": "± 12849.963376039103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108551.56,
            "unit": "ns",
            "range": "± 19557.13208577899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226984.98979591837,
            "unit": "ns",
            "range": "± 16597.68523265727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227640.25806451612,
            "unit": "ns",
            "range": "± 6833.511751984928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4050827.1666666665,
            "unit": "ns",
            "range": "± 59110.28038296199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10262977.714285715,
            "unit": "ns",
            "range": "± 290274.3583757803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22778.925531914894,
            "unit": "ns",
            "range": "± 2574.0299821939884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62061.9175257732,
            "unit": "ns",
            "range": "± 10526.784748391148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64245.36046511628,
            "unit": "ns",
            "range": "± 3486.5996174016977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132380.41666666666,
            "unit": "ns",
            "range": "± 20072.073650861636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9596.65306122449,
            "unit": "ns",
            "range": "± 1375.090183374608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24286.64285714286,
            "unit": "ns",
            "range": "± 3626.8979851720896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5165527.720262097,
            "unit": "ns",
            "range": "± 470047.78631766245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6064496.833333333,
            "unit": "ns",
            "range": "± 64302.323263320795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29368504.42857143,
            "unit": "ns",
            "range": "± 820450.9737988018"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6918966.962264151,
            "unit": "ns",
            "range": "± 288098.38213246653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31811633.37037037,
            "unit": "ns",
            "range": "± 885937.3949853753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6845587.044270833,
            "unit": "ns",
            "range": "± 42932.031838800845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2079485.5948016827,
            "unit": "ns",
            "range": "± 11047.423124182087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299538.6959635417,
            "unit": "ns",
            "range": "± 3583.600531247558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2727794.743289263,
            "unit": "ns",
            "range": "± 91247.4233404783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856380.6279296875,
            "unit": "ns",
            "range": "± 6708.713402548879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726855.46484375,
            "unit": "ns",
            "range": "± 1997.1226374092287"
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
          "id": "e10abba2d1e2181eeb2fa857709cc58772e62418",
          "message": "Added state caching",
          "timestamp": "2023-03-23T17:48:40+09:00",
          "tree_id": "420b79d8af8438c8fceaadc0aecb2338a4d58d98",
          "url": "https://github.com/greymistcube/libplanet/commit/e10abba2d1e2181eeb2fa857709cc58772e62418"
        },
        "date": 1679562690884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 152956.26086956522,
            "unit": "ns",
            "range": "± 10549.517813958297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141867.585106383,
            "unit": "ns",
            "range": "± 23770.151715743283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257383.125,
            "unit": "ns",
            "range": "± 22717.336854862606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266266.01612903224,
            "unit": "ns",
            "range": "± 31085.15779540934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4293084.819587629,
            "unit": "ns",
            "range": "± 470814.6270453864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11396482.542553192,
            "unit": "ns",
            "range": "± 795943.5348090708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30474.110526315788,
            "unit": "ns",
            "range": "± 5428.627614068628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81378.57777777778,
            "unit": "ns",
            "range": "± 21642.355730272997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72608.69540229885,
            "unit": "ns",
            "range": "± 8457.586528081081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150186.02040816325,
            "unit": "ns",
            "range": "± 27462.19190733415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10360.351648351649,
            "unit": "ns",
            "range": "± 939.0114231186183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26749.274193548386,
            "unit": "ns",
            "range": "± 4911.591493885159"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6062764.128691621,
            "unit": "ns",
            "range": "± 717185.0786586412"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7312487.264044944,
            "unit": "ns",
            "range": "± 823241.1148944792"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29068089.62643678,
            "unit": "ns",
            "range": "± 2098744.0743983267"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8917384.069892474,
            "unit": "ns",
            "range": "± 1639663.716922536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36806175.31521739,
            "unit": "ns",
            "range": "± 2722861.8867802178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7745671.57421875,
            "unit": "ns",
            "range": "± 289450.7637432029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221232.5229378636,
            "unit": "ns",
            "range": "± 146098.02813811266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400608.1926618305,
            "unit": "ns",
            "range": "± 24594.26904095826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287302.1671262253,
            "unit": "ns",
            "range": "± 133850.68134028232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937080.6822584503,
            "unit": "ns",
            "range": "± 37318.059118432044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806860.648167387,
            "unit": "ns",
            "range": "± 30238.041425527463"
          }
        ]
      }
    ]
  }
}