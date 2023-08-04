window.BENCHMARK_DATA = {
  "lastUpdate": 1691117680726,
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
          "id": "00df6e8b29f1fd741cf38622a90dc24c93ea57aa",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-03T18:02:54+09:00",
          "tree_id": "ec9c186229f152f3efbd7dc08393240dfeda5f5e",
          "url": "https://github.com/greymistcube/libplanet/commit/00df6e8b29f1fd741cf38622a90dc24c93ea57aa"
        },
        "date": 1691055411939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339049.3,
            "unit": "ns",
            "range": "± 13188.76886960714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329751,
            "unit": "ns",
            "range": "± 7781.21601092629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302043.22222222225,
            "unit": "ns",
            "range": "± 6432.283992446006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5366323.933333334,
            "unit": "ns",
            "range": "± 44495.961846420345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4991437.714285715,
            "unit": "ns",
            "range": "± 48908.70464199846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26232.042105263157,
            "unit": "ns",
            "range": "± 1751.4210274030522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109213.80808080808,
            "unit": "ns",
            "range": "± 9444.368707283602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100070,
            "unit": "ns",
            "range": "± 7804.7136850279885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103825.32989690722,
            "unit": "ns",
            "range": "± 12897.457616653282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7301.114583333333,
            "unit": "ns",
            "range": "± 910.5908304044505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27933.36170212766,
            "unit": "ns",
            "range": "± 2541.546844421418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754961.717647059,
            "unit": "ns",
            "range": "± 91024.2503626698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3313495.407407407,
            "unit": "ns",
            "range": "± 91616.77476408887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2238151.0568181816,
            "unit": "ns",
            "range": "± 122913.75054127659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5712029.1875,
            "unit": "ns",
            "range": "± 95654.53211372597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6024872.912946428,
            "unit": "ns",
            "range": "± 26546.53016517782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922974.5393629808,
            "unit": "ns",
            "range": "± 930.2316490484218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283193.3826729911,
            "unit": "ns",
            "range": "± 557.746811200941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3178550.277604167,
            "unit": "ns",
            "range": "± 5674.134030667808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986380.298828125,
            "unit": "ns",
            "range": "± 938.6097275917333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907523.3372896635,
            "unit": "ns",
            "range": "± 472.30764287021935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4406731,
            "unit": "ns",
            "range": "± 44503.71224761123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4587138.8,
            "unit": "ns",
            "range": "± 53681.74959784484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5376275.266666667,
            "unit": "ns",
            "range": "± 73559.40922378578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5039419.814814814,
            "unit": "ns",
            "range": "± 126156.63492293924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7870637.027027027,
            "unit": "ns",
            "range": "± 210022.3217692833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10569454.02173913,
            "unit": "ns",
            "range": "± 403950.9672201147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26999103.266666666,
            "unit": "ns",
            "range": "± 185549.56292648477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66858727.06666667,
            "unit": "ns",
            "range": "± 356658.6051675561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136734990.13333333,
            "unit": "ns",
            "range": "± 439399.67316439934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269967298.21428573,
            "unit": "ns",
            "range": "± 851372.449488307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59529.64893617021,
            "unit": "ns",
            "range": "± 4208.247745853697"
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
          "id": "d209af2c548175a4015c475c59a1cf3178400d1b",
          "message": "Parallel get for ITrie",
          "timestamp": "2023-08-04T11:39:35+09:00",
          "tree_id": "39363b6e5139d625a77b3009aa132541c3ab578a",
          "url": "https://github.com/greymistcube/libplanet/commit/d209af2c548175a4015c475c59a1cf3178400d1b"
        },
        "date": 1691117673208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3832380.35,
            "unit": "ns",
            "range": "± 83282.19578876009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102309.25,
            "unit": "ns",
            "range": "± 93834.39946543844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4737557,
            "unit": "ns",
            "range": "± 129673.70164069506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4288546.166666667,
            "unit": "ns",
            "range": "± 126835.30802935868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6411928.294117647,
            "unit": "ns",
            "range": "± 108000.46124482797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8943587.933333334,
            "unit": "ns",
            "range": "± 73946.49561431627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23422749.266666666,
            "unit": "ns",
            "range": "± 156461.3436034905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57209308.666666664,
            "unit": "ns",
            "range": "± 221053.74801154668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115659775.71428572,
            "unit": "ns",
            "range": "± 558436.3713655408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228281116.2,
            "unit": "ns",
            "range": "± 1618259.9084556492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55813.333333333336,
            "unit": "ns",
            "range": "± 7061.401543702462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5207588.508413462,
            "unit": "ns",
            "range": "± 14619.040716412763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593768.8083333333,
            "unit": "ns",
            "range": "± 4580.467343322421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084927.1217447917,
            "unit": "ns",
            "range": "± 873.5560058869727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610385.2059151786,
            "unit": "ns",
            "range": "± 9401.357017266937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828187.7906901041,
            "unit": "ns",
            "range": "± 568.515826800802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749218.0478515625,
            "unit": "ns",
            "range": "± 278.0716439674612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295086,
            "unit": "ns",
            "range": "± 12400.91531314417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279999,
            "unit": "ns",
            "range": "± 9310.980808223756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269538.55555555556,
            "unit": "ns",
            "range": "± 18442.656144872526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4638310.6,
            "unit": "ns",
            "range": "± 48852.400999336765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4335960.214285715,
            "unit": "ns",
            "range": "± 31219.043298746536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26386.41935483871,
            "unit": "ns",
            "range": "± 2840.7613122364896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103469.101010101,
            "unit": "ns",
            "range": "± 6991.02814618231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101644.76288659793,
            "unit": "ns",
            "range": "± 10727.302914927324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97890.32653061225,
            "unit": "ns",
            "range": "± 13741.826771054883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8822.591836734693,
            "unit": "ns",
            "range": "± 962.6723740330809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24154.296703296703,
            "unit": "ns",
            "range": "± 1805.4330382025955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552639.5833333333,
            "unit": "ns",
            "range": "± 95266.65026861976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2838507.033333333,
            "unit": "ns",
            "range": "± 82278.54119014362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1920270.506849315,
            "unit": "ns",
            "range": "± 94440.60742753194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5015726.833333333,
            "unit": "ns",
            "range": "± 235729.38706456037"
          }
        ]
      }
    ]
  }
}