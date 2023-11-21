window.BENCHMARK_DATA = {
  "lastUpdate": 1700533211122,
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
          "id": "2ae593ded64ac7056f5adb3dd7daa09963e75495",
          "message": "Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T09:26:48+09:00",
          "tree_id": "e18ded43cd8ed7dcf96832af16e16975454e9894",
          "url": "https://github.com/greymistcube/libplanet/commit/2ae593ded64ac7056f5adb3dd7daa09963e75495"
        },
        "date": 1700527056627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200269.97297297296,
            "unit": "ns",
            "range": "± 9182.418259649792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194242.61904761905,
            "unit": "ns",
            "range": "± 10325.432711729425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163100.18421052632,
            "unit": "ns",
            "range": "± 3450.533244661558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115810,
            "unit": "ns",
            "range": "± 35535.04462444839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865359.346153846,
            "unit": "ns",
            "range": "± 26396.705002222512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16371.96875,
            "unit": "ns",
            "range": "± 1085.4208444375267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63670.085106382976,
            "unit": "ns",
            "range": "± 6618.149552409295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61221.880952380954,
            "unit": "ns",
            "range": "± 1391.7281155524047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62581.80927835051,
            "unit": "ns",
            "range": "± 11758.74830300192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3135.412087912088,
            "unit": "ns",
            "range": "± 568.7129064504954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12102.163157894736,
            "unit": "ns",
            "range": "± 1260.9565063324992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3878026.8506610575,
            "unit": "ns",
            "range": "± 6509.214492796172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1153556.5042317708,
            "unit": "ns",
            "range": "± 4420.48121709189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738445.494140625,
            "unit": "ns",
            "range": "± 2731.977123767808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978546.9026442308,
            "unit": "ns",
            "range": "± 4502.611530377873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624346.846875,
            "unit": "ns",
            "range": "± 13935.051521111585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578167.1244860197,
            "unit": "ns",
            "range": "± 12619.903066311703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38975.87234042553,
            "unit": "ns",
            "range": "± 4938.58980184016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377674.081081081,
            "unit": "ns",
            "range": "± 53334.79272918819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2540228.6153846155,
            "unit": "ns",
            "range": "± 65445.175834633934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3133401.2,
            "unit": "ns",
            "range": "± 57769.49233214955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2988225.537735849,
            "unit": "ns",
            "range": "± 123852.39755015493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6462032.375,
            "unit": "ns",
            "range": "± 124755.31277337784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5805996.714285715,
            "unit": "ns",
            "range": "± 20475.478114746737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14719770,
            "unit": "ns",
            "range": "± 195538.3907054886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37203590.461538464,
            "unit": "ns",
            "range": "± 94010.55778175076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74895029.73076923,
            "unit": "ns",
            "range": "± 941671.7742745393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153287335.53333333,
            "unit": "ns",
            "range": "± 1493548.3217831987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969462.612244898,
            "unit": "ns",
            "range": "± 94878.46911467308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868636.5666666667,
            "unit": "ns",
            "range": "± 82163.95623682569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410745.2,
            "unit": "ns",
            "range": "± 125548.58063312182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5804777.4375,
            "unit": "ns",
            "range": "± 374514.2070425525"
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
          "id": "1dd52810df4744e86ccb4ae280b6cc49ed6eb561",
          "message": "Changelog",
          "timestamp": "2023-11-21T09:29:08+09:00",
          "tree_id": "0f384439f7451e7b350fb82a0c0179dc746c7853",
          "url": "https://github.com/greymistcube/libplanet/commit/1dd52810df4744e86ccb4ae280b6cc49ed6eb561"
        },
        "date": 1700527202117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197961.64583333334,
            "unit": "ns",
            "range": "± 7698.497038976583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192628.12903225806,
            "unit": "ns",
            "range": "± 8288.0483523731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167259.9347826087,
            "unit": "ns",
            "range": "± 4203.427939043939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208267.3571428573,
            "unit": "ns",
            "range": "± 41593.08741727523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802810.846153846,
            "unit": "ns",
            "range": "± 40208.256900472064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15095.10606060606,
            "unit": "ns",
            "range": "± 3012.6285418191374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66295.85714285714,
            "unit": "ns",
            "range": "± 7308.924082046099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59621.927083333336,
            "unit": "ns",
            "range": "± 5175.986238582518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62637.357142857145,
            "unit": "ns",
            "range": "± 10706.715636295516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2932.1382978723404,
            "unit": "ns",
            "range": "± 410.71122683807295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11399.989010989011,
            "unit": "ns",
            "range": "± 928.5362255184889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3614129.4747596155,
            "unit": "ns",
            "range": "± 28835.52007722578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140969.9331752232,
            "unit": "ns",
            "range": "± 4061.980686631195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729246.140625,
            "unit": "ns",
            "range": "± 2475.1092928341195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966097.8038504464,
            "unit": "ns",
            "range": "± 14933.55251155501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605242.0780436198,
            "unit": "ns",
            "range": "± 1004.1628691730823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573629.6682291667,
            "unit": "ns",
            "range": "± 5120.291461975582"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38946.114583333336,
            "unit": "ns",
            "range": "± 4788.217705708333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2370465.4166666665,
            "unit": "ns",
            "range": "± 50231.48047724369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563133.870967742,
            "unit": "ns",
            "range": "± 76486.71271131212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3102383.714285714,
            "unit": "ns",
            "range": "± 35934.1354407425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2899112.1375,
            "unit": "ns",
            "range": "± 142875.07747783486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6937405.566666666,
            "unit": "ns",
            "range": "± 202149.36867773233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5718896.75,
            "unit": "ns",
            "range": "± 13548.435039617207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14336830,
            "unit": "ns",
            "range": "± 63603.644656351484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37107887.615384616,
            "unit": "ns",
            "range": "± 197258.6889795303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76564928.92307693,
            "unit": "ns",
            "range": "± 535968.4586189846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151733099.57142857,
            "unit": "ns",
            "range": "± 1568796.041392581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962829.4375,
            "unit": "ns",
            "range": "± 103644.93254231638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1840346.8055555555,
            "unit": "ns",
            "range": "± 60794.09899456617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1364709.6153846155,
            "unit": "ns",
            "range": "± 79571.84388306222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5787172.391304348,
            "unit": "ns",
            "range": "± 372875.6536679871"
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
          "id": "ff0b1a73671cb75d5d76e7dcab2d1bcfd447aefe",
          "message": "Changelog",
          "timestamp": "2023-11-21T11:07:26+09:00",
          "tree_id": "908ad05338b32cbef2dc639356fde4e5274669a1",
          "url": "https://github.com/greymistcube/libplanet/commit/ff0b1a73671cb75d5d76e7dcab2d1bcfd447aefe"
        },
        "date": 1700533201843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197668.71333333335,
            "unit": "ns",
            "range": "± 9443.226171253204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192879.2891566265,
            "unit": "ns",
            "range": "± 9515.625576413291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170259.6923076923,
            "unit": "ns",
            "range": "± 2566.6455210584168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108265.5714285714,
            "unit": "ns",
            "range": "± 34415.02487781549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854086.7333333334,
            "unit": "ns",
            "range": "± 47107.71111046117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12416.786516853932,
            "unit": "ns",
            "range": "± 1166.8406009382588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67489.95698924731,
            "unit": "ns",
            "range": "± 6659.938596325467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61833.357894736844,
            "unit": "ns",
            "range": "± 5130.705508941717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58988.95698924731,
            "unit": "ns",
            "range": "± 13088.223796615945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2974.4835164835163,
            "unit": "ns",
            "range": "± 503.441431276047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11738.489361702128,
            "unit": "ns",
            "range": "± 1371.0233109763117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3594486.2350260415,
            "unit": "ns",
            "range": "± 13540.08789579163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1166884.7981305805,
            "unit": "ns",
            "range": "± 4817.517904530628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736060.5223911831,
            "unit": "ns",
            "range": "± 1876.5978618915117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984646.9163411458,
            "unit": "ns",
            "range": "± 7430.697060132137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611648.2881610577,
            "unit": "ns",
            "range": "± 3947.1268662169728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563987.5784505209,
            "unit": "ns",
            "range": "± 2457.251617578212"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38483.239583333336,
            "unit": "ns",
            "range": "± 5043.351694103502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403477.3214285714,
            "unit": "ns",
            "range": "± 102956.96261008676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547691.3488372094,
            "unit": "ns",
            "range": "± 94014.29132011278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224527.827586207,
            "unit": "ns",
            "range": "± 93090.23072001124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2953022.0967741935,
            "unit": "ns",
            "range": "± 134254.3641019416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6633688.764705882,
            "unit": "ns",
            "range": "± 207983.5883892676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5912531.75,
            "unit": "ns",
            "range": "± 45092.191872217845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14800713.07142857,
            "unit": "ns",
            "range": "± 87748.10569199183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37497786.233333334,
            "unit": "ns",
            "range": "± 308253.5922305962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77062134.96666667,
            "unit": "ns",
            "range": "± 551858.5579434368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154690241.07692307,
            "unit": "ns",
            "range": "± 340645.5343746785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975212.0842105263,
            "unit": "ns",
            "range": "± 84859.31370411417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871325.3125,
            "unit": "ns",
            "range": "± 86091.53283383083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377432.829787234,
            "unit": "ns",
            "range": "± 93393.68757463172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5449482.932432433,
            "unit": "ns",
            "range": "± 184670.88684716634"
          }
        ]
      }
    ]
  }
}