window.BENCHMARK_DATA = {
  "lastUpdate": 1704441292321,
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
          "id": "7e8c0091a0e73ec237800d4e3dc1839ae3772537",
          "message": "Test fixes",
          "timestamp": "2024-01-05T14:54:52+09:00",
          "tree_id": "9696fabb7b18492c9aa28c897bf27a3d37462adc",
          "url": "https://github.com/greymistcube/libplanet/commit/7e8c0091a0e73ec237800d4e3dc1839ae3772537"
        },
        "date": 1704434753418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742407.644831731,
            "unit": "ns",
            "range": "± 13242.511988272388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198138.5057842548,
            "unit": "ns",
            "range": "± 2437.580163065098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775505.5624302456,
            "unit": "ns",
            "range": "± 1907.5023217030853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935970.951923077,
            "unit": "ns",
            "range": "± 8502.618088290947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623590.3209092882,
            "unit": "ns",
            "range": "± 13284.374841581828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563720.2101004465,
            "unit": "ns",
            "range": "± 876.7366583984675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2299318.980769231,
            "unit": "ns",
            "range": "± 90868.65768713856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536494.6428571427,
            "unit": "ns",
            "range": "± 38829.75684635757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3085575,
            "unit": "ns",
            "range": "± 39538.39761742813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3098834.9833333334,
            "unit": "ns",
            "range": "± 126734.40269713553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13923761.521276595,
            "unit": "ns",
            "range": "± 973077.4325030486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40369.40625,
            "unit": "ns",
            "range": "± 5451.98980687568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196954.42424242425,
            "unit": "ns",
            "range": "± 6093.381989043026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195344.52380952382,
            "unit": "ns",
            "range": "± 7149.942272453623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171266.92307692306,
            "unit": "ns",
            "range": "± 2221.3956371891695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3174337.3571428573,
            "unit": "ns",
            "range": "± 35838.89614941832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2777731.2666666666,
            "unit": "ns",
            "range": "± 18196.825831786733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15511.112359550561,
            "unit": "ns",
            "range": "± 1326.8170511535754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67005.31914893616,
            "unit": "ns",
            "range": "± 5938.242828621306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52284.93877551021,
            "unit": "ns",
            "range": "± 1232.4628359536052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57780.5625,
            "unit": "ns",
            "range": "± 10149.667196838473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3146.257894736842,
            "unit": "ns",
            "range": "± 404.6927838152251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14337.767676767677,
            "unit": "ns",
            "range": "± 2624.058893799493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5520072.966666667,
            "unit": "ns",
            "range": "± 14935.085187315837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14351720.857142856,
            "unit": "ns",
            "range": "± 131288.6768991887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36812163.571428575,
            "unit": "ns",
            "range": "± 182272.44326080597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74988524.42857143,
            "unit": "ns",
            "range": "± 536549.0576525152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145932428.33333334,
            "unit": "ns",
            "range": "± 419420.8504577436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967601.1086956522,
            "unit": "ns",
            "range": "± 71157.99509827154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863545.5555555555,
            "unit": "ns",
            "range": "± 85116.01121008558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626294.9285714286,
            "unit": "ns",
            "range": "± 146894.89917428268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12926739.25773196,
            "unit": "ns",
            "range": "± 1227053.0840413298"
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
          "id": "02f4d2cb421a1f1f511382929d1f1e94c4ccc628",
          "message": "Changelog",
          "timestamp": "2024-01-05T16:39:17+09:00",
          "tree_id": "ef0b7543e38511b97dd0faffe9383ecfca9f4a77",
          "url": "https://github.com/greymistcube/libplanet/commit/02f4d2cb421a1f1f511382929d1f1e94c4ccc628"
        },
        "date": 1704441013468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3684688.911358173,
            "unit": "ns",
            "range": "± 14021.357714757516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221142.1645132212,
            "unit": "ns",
            "range": "± 5597.329276702127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761129.6559895833,
            "unit": "ns",
            "range": "± 1697.5239115863185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916221.529017857,
            "unit": "ns",
            "range": "± 2580.693260658914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625759.7711588541,
            "unit": "ns",
            "range": "± 11406.624306926018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580023.7159705529,
            "unit": "ns",
            "range": "± 2687.8752169085674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377172.512195122,
            "unit": "ns",
            "range": "± 83838.39597854968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2469085,
            "unit": "ns",
            "range": "± 73162.8330207695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3097734.214285714,
            "unit": "ns",
            "range": "± 38890.473696955996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3093632.9142857143,
            "unit": "ns",
            "range": "± 147428.7044237977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13962329.868421054,
            "unit": "ns",
            "range": "± 1005692.5550976562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38560.563829787236,
            "unit": "ns",
            "range": "± 4409.523931484391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198775.23333333334,
            "unit": "ns",
            "range": "± 5845.288793687545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191506.6779661017,
            "unit": "ns",
            "range": "± 8200.154093255005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170359.34210526315,
            "unit": "ns",
            "range": "± 3565.956195019132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3211072.8333333335,
            "unit": "ns",
            "range": "± 37406.966631979936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2757171.3076923075,
            "unit": "ns",
            "range": "± 39612.8546841902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12380.380434782608,
            "unit": "ns",
            "range": "± 958.8322779273823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63673.5206185567,
            "unit": "ns",
            "range": "± 6120.467707447182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52609.69565217391,
            "unit": "ns",
            "range": "± 1296.746888976853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67242.28125,
            "unit": "ns",
            "range": "± 15853.302514786279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6399.959595959596,
            "unit": "ns",
            "range": "± 1894.7913024878246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13538.561855670103,
            "unit": "ns",
            "range": "± 3095.0475993055993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5651905.071428572,
            "unit": "ns",
            "range": "± 22619.521635811994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14462414.566666666,
            "unit": "ns",
            "range": "± 72176.10050471462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36456216.333333336,
            "unit": "ns",
            "range": "± 149414.22485907457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73085315.92307693,
            "unit": "ns",
            "range": "± 534722.4065027357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145174048.92857143,
            "unit": "ns",
            "range": "± 1054197.3250159037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984583.8958333334,
            "unit": "ns",
            "range": "± 91185.42871585515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855650.858974359,
            "unit": "ns",
            "range": "± 60202.41340742307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567941.0752688171,
            "unit": "ns",
            "range": "± 109312.26517694085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12863265.52631579,
            "unit": "ns",
            "range": "± 1018291.6141233998"
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
          "id": "6a91968371cf73e1989064d8297f936727d1767e",
          "message": "Changelog",
          "timestamp": "2024-01-05T16:43:10+09:00",
          "tree_id": "01eda54e1c9e452e3b833fe5ab49be0fc1efb64e",
          "url": "https://github.com/greymistcube/libplanet/commit/6a91968371cf73e1989064d8297f936727d1767e"
        },
        "date": 1704441286092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763620.972098214,
            "unit": "ns",
            "range": "± 40095.29457265378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201547.8414963942,
            "unit": "ns",
            "range": "± 3110.151850978673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771327.9055989584,
            "unit": "ns",
            "range": "± 12529.501302389846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965492.0157552084,
            "unit": "ns",
            "range": "± 25735.74589748798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619905.7208533654,
            "unit": "ns",
            "range": "± 5677.6109975507325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569259.9881510417,
            "unit": "ns",
            "range": "± 1994.0412585459346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439617.1333333333,
            "unit": "ns",
            "range": "± 43208.97815908612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2484883.777777778,
            "unit": "ns",
            "range": "± 52831.21508279156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3184883.1785714286,
            "unit": "ns",
            "range": "± 89996.47570015401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3228957.85,
            "unit": "ns",
            "range": "± 112644.70856329761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14109106.87368421,
            "unit": "ns",
            "range": "± 1022492.3198106531"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40389.0625,
            "unit": "ns",
            "range": "± 5045.10888685895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202258.77659574468,
            "unit": "ns",
            "range": "± 7763.962182394872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195029.44444444444,
            "unit": "ns",
            "range": "± 8085.877106521036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172673.08333333334,
            "unit": "ns",
            "range": "± 1744.5428918530927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3235324.576923077,
            "unit": "ns",
            "range": "± 29331.565739721256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819705,
            "unit": "ns",
            "range": "± 15102.591714669374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15528.091836734693,
            "unit": "ns",
            "range": "± 2619.783882196623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63256.72222222222,
            "unit": "ns",
            "range": "± 6013.36933546154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60126.677083333336,
            "unit": "ns",
            "range": "± 7419.343296935728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84859.1313131313,
            "unit": "ns",
            "range": "± 16891.288942399933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3420.862068965517,
            "unit": "ns",
            "range": "± 892.7914438149361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15427.551020408164,
            "unit": "ns",
            "range": "± 3496.336100296432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5623726.142857143,
            "unit": "ns",
            "range": "± 24330.522928577226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14378587.538461538,
            "unit": "ns",
            "range": "± 69046.08321574728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36869543.538461536,
            "unit": "ns",
            "range": "± 200062.55878291978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74930084.86666666,
            "unit": "ns",
            "range": "± 911620.8397244097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149575034.46153846,
            "unit": "ns",
            "range": "± 765731.5108413888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985701.4222222222,
            "unit": "ns",
            "range": "± 75134.27502362248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888729.051020408,
            "unit": "ns",
            "range": "± 73540.14176484988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610346.7395833333,
            "unit": "ns",
            "range": "± 150802.0727370287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13000728.697916666,
            "unit": "ns",
            "range": "± 1072824.089106422"
          }
        ]
      }
    ]
  }
}