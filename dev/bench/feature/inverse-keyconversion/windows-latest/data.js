window.BENCHMARK_DATA = {
  "lastUpdate": 1695089559179,
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
          "id": "a8930c3076bea9c0507e1986d89c2065ed404130",
          "message": "Added test",
          "timestamp": "2023-09-15T17:43:48+09:00",
          "tree_id": "1c684cbbb77075e1b3858f3181f76e8fc81d857d",
          "url": "https://github.com/greymistcube/libplanet/commit/a8930c3076bea9c0507e1986d89c2065ed404130"
        },
        "date": 1694768344423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1271921.4285714286,
            "unit": "ns",
            "range": "± 99291.58169692075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2330564.150943396,
            "unit": "ns",
            "range": "± 75688.39991992377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592548.4848484849,
            "unit": "ns",
            "range": "± 117812.54858810139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4048295.238095238,
            "unit": "ns",
            "range": "± 147795.4666989864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44217.605633802814,
            "unit": "ns",
            "range": "± 2171.291560858081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6972464.285714285,
            "unit": "ns",
            "range": "± 56418.03594791103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17757000,
            "unit": "ns",
            "range": "± 123890.24520575805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45627426.666666664,
            "unit": "ns",
            "range": "± 564188.734210037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92773493.33333333,
            "unit": "ns",
            "range": "± 823727.8429421304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181843492.85714287,
            "unit": "ns",
            "range": "± 1432810.7542998702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4301838.731971154,
            "unit": "ns",
            "range": "± 5070.3601638659375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403903.5081129808,
            "unit": "ns",
            "range": "± 2268.042033915774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995515.0691105769,
            "unit": "ns",
            "range": "± 645.9914992698966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589007.96875,
            "unit": "ns",
            "range": "± 6228.527770533112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799730.2106584822,
            "unit": "ns",
            "range": "± 727.7726121160085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721057.2102864584,
            "unit": "ns",
            "range": "± 473.42945063857127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2953207.1428571427,
            "unit": "ns",
            "range": "± 51714.7868198659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3138368.75,
            "unit": "ns",
            "range": "± 58072.308016242416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3873373.3333333335,
            "unit": "ns",
            "range": "± 68902.92826730605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3305803.9215686275,
            "unit": "ns",
            "range": "± 121277.08763123285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5486619.444444444,
            "unit": "ns",
            "range": "± 141368.41194844554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238550,
            "unit": "ns",
            "range": "± 7166.5976551791655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230450,
            "unit": "ns",
            "range": "± 6959.525845917953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204829.72972972973,
            "unit": "ns",
            "range": "± 6848.108614178925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3788733.3333333335,
            "unit": "ns",
            "range": "± 34002.61894675314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3391121.4285714286,
            "unit": "ns",
            "range": "± 43917.70588395858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17740.217391304348,
            "unit": "ns",
            "range": "± 1452.474945981929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80627.95698924731,
            "unit": "ns",
            "range": "± 5281.908531701434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65641.55844155845,
            "unit": "ns",
            "range": "± 3336.849705988484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70191.76470588235,
            "unit": "ns",
            "range": "± 8157.5879337190445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4025.5102040816328,
            "unit": "ns",
            "range": "± 646.371509861614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17504.081632653062,
            "unit": "ns",
            "range": "± 1767.0476494224104"
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
          "id": "fae541ca878ecab58d86efe8734aea616420b4d1",
          "message": "Typo fix",
          "timestamp": "2023-09-15T17:45:16+09:00",
          "tree_id": "a585c6e34603a7b2c98ce5f8223081084e6c06c1",
          "url": "https://github.com/greymistcube/libplanet/commit/fae541ca878ecab58d86efe8734aea616420b4d1"
        },
        "date": 1694768749878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1261541.6666666667,
            "unit": "ns",
            "range": "± 173309.21296412838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2487547,
            "unit": "ns",
            "range": "± 314916.0027353133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1675172.448979592,
            "unit": "ns",
            "range": "± 207976.913756783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4438906.12244898,
            "unit": "ns",
            "range": "± 410774.28844147903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47098.92473118279,
            "unit": "ns",
            "range": "± 6012.767116432079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7041768.367346939,
            "unit": "ns",
            "range": "± 499984.7304053836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19798500,
            "unit": "ns",
            "range": "± 1667338.7387343373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49394497.95918367,
            "unit": "ns",
            "range": "± 3725360.39607101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95132122.78481013,
            "unit": "ns",
            "range": "± 4937071.889442717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192763618.33333334,
            "unit": "ns",
            "range": "± 8543319.99139801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5407701.096270162,
            "unit": "ns",
            "range": "± 243152.3286472636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1642992.0064786586,
            "unit": "ns",
            "range": "± 58559.339672189984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130965.4296875,
            "unit": "ns",
            "range": "± 21827.44371154609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2912784.0885416665,
            "unit": "ns",
            "range": "± 50524.088618396425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910663.791015625,
            "unit": "ns",
            "range": "± 24221.504332424473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 818244.4501953125,
            "unit": "ns",
            "range": "± 61524.11752397461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2986880,
            "unit": "ns",
            "range": "± 316893.9589391398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3221485.714285714,
            "unit": "ns",
            "range": "± 307468.82500591094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3839442.4242424243,
            "unit": "ns",
            "range": "± 389224.81439523085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3433974.7474747472,
            "unit": "ns",
            "range": "± 375202.23562914575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5762190.721649485,
            "unit": "ns",
            "range": "± 539815.3467240894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239762.62626262626,
            "unit": "ns",
            "range": "± 35847.735208280275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236494.89795918367,
            "unit": "ns",
            "range": "± 33513.54972153701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209946,
            "unit": "ns",
            "range": "± 32243.967159483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4059528,
            "unit": "ns",
            "range": "± 497751.96230226714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3479449.494949495,
            "unit": "ns",
            "range": "± 346761.795665866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18385.714285714286,
            "unit": "ns",
            "range": "± 2546.5966777594085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76714.73684210527,
            "unit": "ns",
            "range": "± 10215.028232546072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69385,
            "unit": "ns",
            "range": "± 8930.453798688231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76229.16666666667,
            "unit": "ns",
            "range": "± 16262.238576185378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4584.375,
            "unit": "ns",
            "range": "± 650.9633549391888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18050.537634408603,
            "unit": "ns",
            "range": "± 2390.453097668978"
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
          "id": "d19fdac843f77e2bf0593612ab26bd7ba6f50e51",
          "message": "Typo fix",
          "timestamp": "2023-09-19T10:51:13+09:00",
          "tree_id": "8aa6f017f95187f17ddf6cdf3aadfbaffcb0dcd9",
          "url": "https://github.com/greymistcube/libplanet/commit/d19fdac843f77e2bf0593612ab26bd7ba6f50e51"
        },
        "date": 1695089532819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697956.25,
            "unit": "ns",
            "range": "± 157304.1651755571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3305273.6263736263,
            "unit": "ns",
            "range": "± 217505.80826735785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2126984.210526316,
            "unit": "ns",
            "range": "± 203519.0896560401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5705658.241758241,
            "unit": "ns",
            "range": "± 355523.51041681675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61041.93548387097,
            "unit": "ns",
            "range": "± 5771.657183856847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9691776.923076924,
            "unit": "ns",
            "range": "± 121813.15031532347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27324248,
            "unit": "ns",
            "range": "± 1371359.2583647447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67139832.9787234,
            "unit": "ns",
            "range": "± 3828484.670820448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135499047.05882353,
            "unit": "ns",
            "range": "± 7314232.380851216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272406215,
            "unit": "ns",
            "range": "± 12081517.1761203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5748462.1875,
            "unit": "ns",
            "range": "± 88904.49506029444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777953.1364889706,
            "unit": "ns",
            "range": "± 35691.37493317762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1311337.2282608696,
            "unit": "ns",
            "range": "± 32512.646585894567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3448981.0308689023,
            "unit": "ns",
            "range": "± 122393.675096256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070113.6985085227,
            "unit": "ns",
            "range": "± 25745.613298250864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962194.3832859849,
            "unit": "ns",
            "range": "± 30300.994173074858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4266783.516483516,
            "unit": "ns",
            "range": "± 321110.0656797141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4506673.333333333,
            "unit": "ns",
            "range": "± 78939.18515148832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5242713.725490196,
            "unit": "ns",
            "range": "± 213005.18305394152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4799623.404255319,
            "unit": "ns",
            "range": "± 359678.9480674537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7784967.469879518,
            "unit": "ns",
            "range": "± 415571.22253839596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316519.04761904763,
            "unit": "ns",
            "range": "± 14380.15946278466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299370.3703703704,
            "unit": "ns",
            "range": "± 12601.401982942585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286602.5641025641,
            "unit": "ns",
            "range": "± 9804.308590439829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5145217.24137931,
            "unit": "ns",
            "range": "± 150243.54768405083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4747664.285714285,
            "unit": "ns",
            "range": "± 170775.6706003216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26979.381443298967,
            "unit": "ns",
            "range": "± 2898.8481241236827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111364.43298969071,
            "unit": "ns",
            "range": "± 10106.639625459115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107847.87234042553,
            "unit": "ns",
            "range": "± 11833.502001433746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113382.47422680413,
            "unit": "ns",
            "range": "± 20243.373454403125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7471.134020618557,
            "unit": "ns",
            "range": "± 1088.8601420452067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27202.04081632653,
            "unit": "ns",
            "range": "± 2669.143250003361"
          }
        ]
      }
    ]
  }
}