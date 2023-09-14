window.BENCHMARK_DATA = {
  "lastUpdate": 1694660083793,
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
          "id": "80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0",
          "message": "Initial implementation of AccountDiff",
          "timestamp": "2023-09-14T11:31:17+09:00",
          "tree_id": "c9d18aa7f1110322223d748a09b0a9fa834f95e2",
          "url": "https://github.com/greymistcube/libplanet/commit/80f99a1dd9afb4cbcd9b3f0004b6ac833d5228d0"
        },
        "date": 1694660050403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837980.6451612904,
            "unit": "ns",
            "range": "± 171931.76936497382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3471209.1836734693,
            "unit": "ns",
            "range": "± 279128.9788287973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2213682.6530612246,
            "unit": "ns",
            "range": "± 198209.663035695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6035168.478260869,
            "unit": "ns",
            "range": "± 412476.152072369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83929.16666666667,
            "unit": "ns",
            "range": "± 16990.547939906053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10676650.515463918,
            "unit": "ns",
            "range": "± 981137.2281401007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25434369.230769232,
            "unit": "ns",
            "range": "± 407129.935001541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67161929.16666667,
            "unit": "ns",
            "range": "± 1709409.6205565971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135395005.55555555,
            "unit": "ns",
            "range": "± 3693231.2783849626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268029458.33333334,
            "unit": "ns",
            "range": "± 3478875.6920639365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910534.114583333,
            "unit": "ns",
            "range": "± 149595.32398352397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755112.9696800595,
            "unit": "ns",
            "range": "± 63837.498331646726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280536.509486607,
            "unit": "ns",
            "range": "± 14936.997369382107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3526217.207278481,
            "unit": "ns",
            "range": "± 183166.330152349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070182.061298077,
            "unit": "ns",
            "range": "± 13090.400186906567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982912.9245923914,
            "unit": "ns",
            "range": "± 24065.23072308049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4529410.588235294,
            "unit": "ns",
            "range": "± 236771.005013549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4441431.0344827585,
            "unit": "ns",
            "range": "± 242935.35522101197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5381822.950819672,
            "unit": "ns",
            "range": "± 239637.5870583485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4826385.416666667,
            "unit": "ns",
            "range": "± 296903.17187476833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7652311.864406779,
            "unit": "ns",
            "range": "± 336497.1338120214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357034.0425531915,
            "unit": "ns",
            "range": "± 32169.870206039668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331247.0588235294,
            "unit": "ns",
            "range": "± 15781.875780802082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313140.2298850575,
            "unit": "ns",
            "range": "± 20822.664640656247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4860470.52631579,
            "unit": "ns",
            "range": "± 566245.4741491547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4768846.428571428,
            "unit": "ns",
            "range": "± 124306.4298630244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31774.117647058825,
            "unit": "ns",
            "range": "± 3250.4268196352186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135844.44444444444,
            "unit": "ns",
            "range": "± 16528.33699575349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133504.79452054793,
            "unit": "ns",
            "range": "± 6618.787256654986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131104.30107526883,
            "unit": "ns",
            "range": "± 14951.762394145282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10101.08695652174,
            "unit": "ns",
            "range": "± 1271.7120557716792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31407.69230769231,
            "unit": "ns",
            "range": "± 4922.086973118229"
          }
        ]
      }
    ]
  }
}