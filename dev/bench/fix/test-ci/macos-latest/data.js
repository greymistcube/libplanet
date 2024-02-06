window.BENCHMARK_DATA = {
  "lastUpdate": 1707239618821,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89190968ea5bc627a904f2997040d8261ffad241",
          "message": "Merge pull request #3654 from greymistcube/merge/4.0.2-to-main\n\n🔀 Merge 4.0.2 to main",
          "timestamp": "2024-02-06T15:08:58+09:00",
          "tree_id": "1962cabcefac60b16dcc0d70eadaa10d61f02fac",
          "url": "https://github.com/greymistcube/libplanet/commit/89190968ea5bc627a904f2997040d8261ffad241"
        },
        "date": 1707236798742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8002987.774193549,
            "unit": "ns",
            "range": "± 242887.12840806114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19757741.42,
            "unit": "ns",
            "range": "± 512648.2232807503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49762215.541666664,
            "unit": "ns",
            "range": "± 1943993.4176375729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97766418.03571428,
            "unit": "ns",
            "range": "± 2718200.083890216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197759908.29411766,
            "unit": "ns",
            "range": "± 3845500.8843853287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47901.755319148935,
            "unit": "ns",
            "range": "± 9720.76106769354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247029.25555555554,
            "unit": "ns",
            "range": "± 16112.53406046634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262894.32795698923,
            "unit": "ns",
            "range": "± 33977.905480468406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210644.31914893616,
            "unit": "ns",
            "range": "± 22864.598108557824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039738.3666666667,
            "unit": "ns",
            "range": "± 68842.48994092723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519515.1428571427,
            "unit": "ns",
            "range": "± 56772.54417932498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15594.54347826087,
            "unit": "ns",
            "range": "± 2226.0475045682115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66199.56701030929,
            "unit": "ns",
            "range": "± 10068.355217697363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65809.27551020408,
            "unit": "ns",
            "range": "± 12859.516112796406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67099.70833333333,
            "unit": "ns",
            "range": "± 14648.516401197097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050.8505154639174,
            "unit": "ns",
            "range": "± 1397.711753793478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12749.8202247191,
            "unit": "ns",
            "range": "± 1651.3601801503848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084709,
            "unit": "ns",
            "range": "± 118158.61847359095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201188.1612903224,
            "unit": "ns",
            "range": "± 99028.93689732585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727294.706521739,
            "unit": "ns",
            "range": "± 117314.07018623204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19542701.804347824,
            "unit": "ns",
            "range": "± 2676832.6878463486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948350.144927536,
            "unit": "ns",
            "range": "± 141365.99529239023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3122021.712121212,
            "unit": "ns",
            "range": "± 147143.80732733905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3638662.0217391304,
            "unit": "ns",
            "range": "± 88954.17472081268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3745100.909090909,
            "unit": "ns",
            "range": "± 204865.98147225258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22175648.544444446,
            "unit": "ns",
            "range": "± 2888075.054978521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4742214.076822917,
            "unit": "ns",
            "range": "± 120694.49832023327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1446304.7585819128,
            "unit": "ns",
            "range": "± 45765.24408858994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 920734.917578125,
            "unit": "ns",
            "range": "± 27495.485631325522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2155577.418229167,
            "unit": "ns",
            "range": "± 81789.01056811903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641530.5332438151,
            "unit": "ns",
            "range": "± 16595.859567326337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581550.1881510416,
            "unit": "ns",
            "range": "± 6648.3827147756665"
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
          "id": "0787f0eac259a9ebf461e7944ed35bcba5cfd588",
          "message": "Test commit",
          "timestamp": "2024-02-07T01:13:13+09:00",
          "tree_id": "ddfa690097555daebedc436aff744a69b8b28889",
          "url": "https://github.com/greymistcube/libplanet/commit/0787f0eac259a9ebf461e7944ed35bcba5cfd588"
        },
        "date": 1707237684954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10486353.287878787,
            "unit": "ns",
            "range": "± 248564.7701713979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 34387244.34408602,
            "unit": "ns",
            "range": "± 6617347.901633743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 85751214.46315789,
            "unit": "ns",
            "range": "± 12433411.42545531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144258449.28723404,
            "unit": "ns",
            "range": "± 21588289.99377425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303708922.87234044,
            "unit": "ns",
            "range": "± 57684557.48567903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61118.895348837206,
            "unit": "ns",
            "range": "± 9870.168387953994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398627.71276595746,
            "unit": "ns",
            "range": "± 95499.13555763382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 413205.702020202,
            "unit": "ns",
            "range": "± 107497.08024947865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 413223.9479166667,
            "unit": "ns",
            "range": "± 104158.2835167475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6309695.763157895,
            "unit": "ns",
            "range": "± 1575920.3344094509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4916468.294117647,
            "unit": "ns",
            "range": "± 491812.6320010552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31807.664948453606,
            "unit": "ns",
            "range": "± 6198.360392542686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120201.12105263158,
            "unit": "ns",
            "range": "± 26574.015731729185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85966.56451612903,
            "unit": "ns",
            "range": "± 10313.04937910182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98950.52083333333,
            "unit": "ns",
            "range": "± 20969.144212630326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6087.942105263158,
            "unit": "ns",
            "range": "± 1307.7767126398835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18068.364583333332,
            "unit": "ns",
            "range": "± 3222.4555923437006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498723.2222222222,
            "unit": "ns",
            "range": "± 176383.75946971183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3053178.0760869565,
            "unit": "ns",
            "range": "± 319122.75452604576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274517.213483146,
            "unit": "ns",
            "range": "± 264287.85091468284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 26792138.12105263,
            "unit": "ns",
            "range": "± 3984204.963551745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5850458.833333333,
            "unit": "ns",
            "range": "± 1106720.2963530798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5481361.729166667,
            "unit": "ns",
            "range": "± 1225267.8003809485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6225877.020833333,
            "unit": "ns",
            "range": "± 1453199.4194210959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7486617.137362638,
            "unit": "ns",
            "range": "± 1791519.8064938576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 44023501.92045455,
            "unit": "ns",
            "range": "± 9273029.1804917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5673504.7731119795,
            "unit": "ns",
            "range": "± 536782.7200805584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1729845.243696733,
            "unit": "ns",
            "range": "± 141628.11282156504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1218858.6795824934,
            "unit": "ns",
            "range": "± 173709.8558686866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2512832.3964453125,
            "unit": "ns",
            "range": "± 341662.00062340335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654845.180974787,
            "unit": "ns",
            "range": "± 24122.18106011893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601742.2304101563,
            "unit": "ns",
            "range": "± 24241.531942363246"
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
          "id": "6446a54e8658dd319dd34918ce1d931d20a4268d",
          "message": "Downgraded xunit packages",
          "timestamp": "2024-02-07T01:35:07+09:00",
          "tree_id": "3b5befe52d1e5fd1c88bf27e90532de3ab9bf878",
          "url": "https://github.com/greymistcube/libplanet/commit/6446a54e8658dd319dd34918ce1d931d20a4268d"
        },
        "date": 1707239294549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14664992.63402062,
            "unit": "ns",
            "range": "± 3125631.329466439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 38612504.989247315,
            "unit": "ns",
            "range": "± 5495601.109316746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 95848429.85106383,
            "unit": "ns",
            "range": "± 13324565.39137817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 218687318.4,
            "unit": "ns",
            "range": "± 49495601.5613392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 369779489.1098901,
            "unit": "ns",
            "range": "± 54638144.26240796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 95313.01063829787,
            "unit": "ns",
            "range": "± 28046.54842189331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 451540.5,
            "unit": "ns",
            "range": "± 118262.84804936596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 447620.8484848485,
            "unit": "ns",
            "range": "± 107199.04269413056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 472364.2111111111,
            "unit": "ns",
            "range": "± 141765.8960279864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 8156000.397959184,
            "unit": "ns",
            "range": "± 1586862.2736162876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 7442107.808080808,
            "unit": "ns",
            "range": "± 1513705.8896378719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36850.177777777775,
            "unit": "ns",
            "range": "± 8673.010691935184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 152859.3829787234,
            "unit": "ns",
            "range": "± 33100.489740344856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 151767.62105263158,
            "unit": "ns",
            "range": "± 32343.631067020786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134963.20618556702,
            "unit": "ns",
            "range": "± 29775.449529540463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9554.4,
            "unit": "ns",
            "range": "± 1730.0729931717124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30121.51111111111,
            "unit": "ns",
            "range": "± 6791.585441889242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535537.3977272727,
            "unit": "ns",
            "range": "± 205048.647045235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3278810.2906976743,
            "unit": "ns",
            "range": "± 332470.43507379957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2677092.8,
            "unit": "ns",
            "range": "± 466561.21261079825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 30610018.458333332,
            "unit": "ns",
            "range": "± 7485584.271269065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4506798.453608247,
            "unit": "ns",
            "range": "± 864893.069882004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6297879.521276596,
            "unit": "ns",
            "range": "± 1462776.1903331429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7329216.737373738,
            "unit": "ns",
            "range": "± 1729294.4691126442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6125342.206521739,
            "unit": "ns",
            "range": "± 1237229.1624113137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 44722674.8655914,
            "unit": "ns",
            "range": "± 10467801.98924195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7848713.416015625,
            "unit": "ns",
            "range": "± 1750350.4913279447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1644188.9400475544,
            "unit": "ns",
            "range": "± 232560.4881843214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056570.250679348,
            "unit": "ns",
            "range": "± 149713.5183076651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2135997.8058854165,
            "unit": "ns",
            "range": "± 103102.19233013048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 701986.8955882353,
            "unit": "ns",
            "range": "± 50081.19950775789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785248.3674696181,
            "unit": "ns",
            "range": "± 89630.9442413941"
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
          "id": "2610dcd684e0d9dbec592eb2682c74a1bd9b5188",
          "message": "Build fix due to package downgrade",
          "timestamp": "2024-02-07T01:50:20+09:00",
          "tree_id": "856532154e88ff8421809c0378287e33f968436f",
          "url": "https://github.com/greymistcube/libplanet/commit/2610dcd684e0d9dbec592eb2682c74a1bd9b5188"
        },
        "date": 1707239601096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9994514.348314608,
            "unit": "ns",
            "range": "± 715721.8531391784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26951012.662790697,
            "unit": "ns",
            "range": "± 6379249.7012482295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63312577.90909091,
            "unit": "ns",
            "range": "± 6964314.8092471035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127602537.76373626,
            "unit": "ns",
            "range": "± 11369580.577885957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270747820.0595238,
            "unit": "ns",
            "range": "± 24697252.15171415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71953.11956521739,
            "unit": "ns",
            "range": "± 19375.184645326404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282122.3804347826,
            "unit": "ns",
            "range": "± 20548.24593238155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332337.123655914,
            "unit": "ns",
            "range": "± 68868.30269796206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245378.776119403,
            "unit": "ns",
            "range": "± 11516.929541122434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4422281.653846154,
            "unit": "ns",
            "range": "± 143317.59513283748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4442299.809859155,
            "unit": "ns",
            "range": "± 217786.6792890033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26653.244897959183,
            "unit": "ns",
            "range": "± 5938.56703021835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131458.306122449,
            "unit": "ns",
            "range": "± 28591.243260905812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95922.01162790698,
            "unit": "ns",
            "range": "± 8799.51044025169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82046.33516483517,
            "unit": "ns",
            "range": "± 8293.360761294056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4461.105263157895,
            "unit": "ns",
            "range": "± 1496.2715184373785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16325.752688172042,
            "unit": "ns",
            "range": "± 2442.9359815417133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716854.081632653,
            "unit": "ns",
            "range": "± 414561.5111956961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189496.4022988505,
            "unit": "ns",
            "range": "± 559209.7648539506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2919441.0555555555,
            "unit": "ns",
            "range": "± 694378.0167005903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 29540825.436842106,
            "unit": "ns",
            "range": "± 5312784.903176465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653213.1049382715,
            "unit": "ns",
            "range": "± 190704.97642980368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3883317.1842105263,
            "unit": "ns",
            "range": "± 299574.91454059636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4500124.505747126,
            "unit": "ns",
            "range": "± 250819.97164564594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4333392.590909091,
            "unit": "ns",
            "range": "± 280237.4021915973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31147946.193181816,
            "unit": "ns",
            "range": "± 9178353.93533253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4611252.53451192,
            "unit": "ns",
            "range": "± 313895.77853305417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381211.5054408482,
            "unit": "ns",
            "range": "± 22550.680145238046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 894674.0454477164,
            "unit": "ns",
            "range": "± 12036.840169482766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2036080.0539641203,
            "unit": "ns",
            "range": "± 48060.58599735375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 730061.7926136364,
            "unit": "ns",
            "range": "± 22984.402524117126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 660115.3159120858,
            "unit": "ns",
            "range": "± 35216.621872267686"
          }
        ]
      }
    ]
  }
}