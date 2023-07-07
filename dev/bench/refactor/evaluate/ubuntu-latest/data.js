window.BENCHMARK_DATA = {
  "lastUpdate": 1688699629815,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658125793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304691.10714285716,
            "unit": "ns",
            "range": "± 12329.89506211862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298567.25373134325,
            "unit": "ns",
            "range": "± 14100.617201560646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268829.0657894737,
            "unit": "ns",
            "range": "± 13618.084448101135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347515.066666666,
            "unit": "ns",
            "range": "± 55509.183566411106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3989234.9444444445,
            "unit": "ns",
            "range": "± 80212.54635285241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24433,
            "unit": "ns",
            "range": "± 2822.7829943751135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113980.83838383839,
            "unit": "ns",
            "range": "± 10593.481078539235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99529.21,
            "unit": "ns",
            "range": "± 12920.756345168507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105042.50574712643,
            "unit": "ns",
            "range": "± 9359.505856656137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7331.632653061224,
            "unit": "ns",
            "range": "± 1496.566306257721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24073.715789473685,
            "unit": "ns",
            "range": "± 2685.088396116747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479113.2210526315,
            "unit": "ns",
            "range": "± 109477.16805831084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738820.205882353,
            "unit": "ns",
            "range": "± 85903.23159504234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940068.2,
            "unit": "ns",
            "range": "± 156795.09862353356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5136866.173913044,
            "unit": "ns",
            "range": "± 126226.8818627259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6601476.110416667,
            "unit": "ns",
            "range": "± 14936.952490610653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865372.871372768,
            "unit": "ns",
            "range": "± 4355.272267023209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366857.1925223214,
            "unit": "ns",
            "range": "± 1169.2731010460714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649675.4111979166,
            "unit": "ns",
            "range": "± 8935.864317088734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802760.0825892857,
            "unit": "ns",
            "range": "± 635.557856482109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737954.5583844866,
            "unit": "ns",
            "range": "± 1077.9962646955485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470401.4444444445,
            "unit": "ns",
            "range": "± 94653.34343452075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3641269.8947368423,
            "unit": "ns",
            "range": "± 110143.3517827316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433757.68,
            "unit": "ns",
            "range": "± 118212.5913875506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3993356.765957447,
            "unit": "ns",
            "range": "± 136225.3583347977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6674788.2,
            "unit": "ns",
            "range": "± 193994.96163496858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8346348.166666667,
            "unit": "ns",
            "range": "± 175299.50682667785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20500380.14285714,
            "unit": "ns",
            "range": "± 296845.56121190154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52728507.384615384,
            "unit": "ns",
            "range": "± 487087.42417156463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105261702,
            "unit": "ns",
            "range": "± 850046.3300597209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209930475.86666667,
            "unit": "ns",
            "range": "± 967206.0102399419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62888.701030927834,
            "unit": "ns",
            "range": "± 8518.113066387987"
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
          "id": "2deaafe8be13aec1e4a3c923d15099d9acf93a02",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T12:01:12+09:00",
          "tree_id": "c7f9d9cdecc9cc5e46736f54e11266a42b3a87b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2deaafe8be13aec1e4a3c923d15099d9acf93a02"
        },
        "date": 1688699622314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283224.1111111111,
            "unit": "ns",
            "range": "± 10717.340085585649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262805.89361702127,
            "unit": "ns",
            "range": "± 9314.547283530868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231768.76923076922,
            "unit": "ns",
            "range": "± 3707.741072266827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4232771.714285715,
            "unit": "ns",
            "range": "± 42162.07305775503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900264.588235294,
            "unit": "ns",
            "range": "± 76427.1611135881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17405.242105263158,
            "unit": "ns",
            "range": "± 1567.4867790394933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86746.65957446808,
            "unit": "ns",
            "range": "± 6878.740480098209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71561.53846153847,
            "unit": "ns",
            "range": "± 1189.2143495731832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90999.84848484848,
            "unit": "ns",
            "range": "± 8570.482693481032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4779.381443298969,
            "unit": "ns",
            "range": "± 732.1398637341971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18988.35789473684,
            "unit": "ns",
            "range": "± 1529.834262444371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434487.0526315789,
            "unit": "ns",
            "range": "± 104435.18746779446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652917.53125,
            "unit": "ns",
            "range": "± 81139.54681466562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1861817.7362637362,
            "unit": "ns",
            "range": "± 103902.04181961596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5045333.757575758,
            "unit": "ns",
            "range": "± 125732.64334517266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008778.213341346,
            "unit": "ns",
            "range": "± 12334.297559097598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2027262.38671875,
            "unit": "ns",
            "range": "± 2035.8267524807538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355559.9563337055,
            "unit": "ns",
            "range": "± 763.3010472722758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622124.5609375,
            "unit": "ns",
            "range": "± 2019.0521916429748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817697.142578125,
            "unit": "ns",
            "range": "± 733.1697035693845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750834.759765625,
            "unit": "ns",
            "range": "± 579.2557835590179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372326.1875,
            "unit": "ns",
            "range": "± 63788.530755111715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3590241.1333333333,
            "unit": "ns",
            "range": "± 65353.88450785972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439967.833333333,
            "unit": "ns",
            "range": "± 113550.73212164825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974086.3214285714,
            "unit": "ns",
            "range": "± 101736.19993123594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6403244.95,
            "unit": "ns",
            "range": "± 131693.66575762702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945007.333333333,
            "unit": "ns",
            "range": "± 74149.94332592639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20043772.85714286,
            "unit": "ns",
            "range": "± 52325.67684571923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51837596.64285714,
            "unit": "ns",
            "range": "± 288152.1023988245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103737658.07142857,
            "unit": "ns",
            "range": "± 309175.98876827525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205627698.07692307,
            "unit": "ns",
            "range": "± 271511.2676444759"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47458.65217391304,
            "unit": "ns",
            "range": "± 3150.725569444484"
          }
        ]
      }
    ]
  }
}