window.BENCHMARK_DATA = {
  "lastUpdate": 1691055421448,
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
      }
    ]
  }
}