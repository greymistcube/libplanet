window.BENCHMARK_DATA = {
  "lastUpdate": 1694668875326,
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
          "id": "8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27",
          "message": "Docs",
          "timestamp": "2023-09-14T14:01:24+09:00",
          "tree_id": "6105a38490983f22a560c0118ce296691097dc4d",
          "url": "https://github.com/greymistcube/libplanet/commit/8f1fea75e684d66b3b263d2a2c1ae68bc9efdc27"
        },
        "date": 1694668847258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646430.5263157894,
            "unit": "ns",
            "range": "± 106008.73616517209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3213244.4444444445,
            "unit": "ns",
            "range": "± 143915.00602985595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120058.762886598,
            "unit": "ns",
            "range": "± 207777.48401864982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5629890.909090909,
            "unit": "ns",
            "range": "± 309743.09957204433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60798.3870967742,
            "unit": "ns",
            "range": "± 5329.055159407304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9710685.714285715,
            "unit": "ns",
            "range": "± 144591.15228353816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25925196.296296295,
            "unit": "ns",
            "range": "± 723044.7898039776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64751950,
            "unit": "ns",
            "range": "± 2221982.902642175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132416031.25,
            "unit": "ns",
            "range": "± 5227185.201920137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266152062.82051283,
            "unit": "ns",
            "range": "± 9270870.708786841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5655924.0234375,
            "unit": "ns",
            "range": "± 110169.11751807724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819129.8452524038,
            "unit": "ns",
            "range": "± 48210.297101824384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375883.314732143,
            "unit": "ns",
            "range": "± 39251.36329903522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3327810.4947916665,
            "unit": "ns",
            "range": "± 55677.346073589244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049984.6516927083,
            "unit": "ns",
            "range": "± 27003.22240774333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962728.05078125,
            "unit": "ns",
            "range": "± 25376.080872534716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4238080.701754386,
            "unit": "ns",
            "range": "± 183664.15432852716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4346615.384615385,
            "unit": "ns",
            "range": "± 66475.63270544886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5227765.853658536,
            "unit": "ns",
            "range": "± 188261.11070765002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4741410,
            "unit": "ns",
            "range": "± 209876.45897979676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7306503.125,
            "unit": "ns",
            "range": "± 223543.49433809766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321927.2727272727,
            "unit": "ns",
            "range": "± 10155.333350242396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309328.8461538461,
            "unit": "ns",
            "range": "± 12681.193989347972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295147.2727272727,
            "unit": "ns",
            "range": "± 12107.051121915976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5114856.25,
            "unit": "ns",
            "range": "± 96944.86384022621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4815676.470588235,
            "unit": "ns",
            "range": "± 194324.9151171669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26984.26966292135,
            "unit": "ns",
            "range": "± 1688.9277715061282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109786.95652173914,
            "unit": "ns",
            "range": "± 8812.568664108512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100664.21052631579,
            "unit": "ns",
            "range": "± 9347.896745911801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110083.67346938775,
            "unit": "ns",
            "range": "± 21293.983923046413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7425.510204081633,
            "unit": "ns",
            "range": "± 1180.6263604492262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24752.083333333332,
            "unit": "ns",
            "range": "± 2303.3604360250733"
          }
        ]
      }
    ]
  }
}