window.BENCHMARK_DATA = {
  "lastUpdate": 1693402151098,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693401925398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663850.9325842697,
            "unit": "ns",
            "range": "± 89196.50161362294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3211479.8,
            "unit": "ns",
            "range": "± 95808.5305338834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131702.3658536584,
            "unit": "ns",
            "range": "± 113007.7674432447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6083414.402439024,
            "unit": "ns",
            "range": "± 319917.5594692128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334379.8095238095,
            "unit": "ns",
            "range": "± 7804.875326480543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322927.5172413793,
            "unit": "ns",
            "range": "± 8481.032192152968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286584.25,
            "unit": "ns",
            "range": "± 5285.18608313211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5341919.266666667,
            "unit": "ns",
            "range": "± 50653.35111106621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4778827.642857143,
            "unit": "ns",
            "range": "± 42554.93483018273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22499.14893617021,
            "unit": "ns",
            "range": "± 1438.731161101193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103314.22807017544,
            "unit": "ns",
            "range": "± 4474.375399417474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84674.17391304347,
            "unit": "ns",
            "range": "± 2087.884458928221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93059.58762886598,
            "unit": "ns",
            "range": "± 12990.192623309274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5907.65625,
            "unit": "ns",
            "range": "± 539.6354291385795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21551.705263157895,
            "unit": "ns",
            "range": "± 1328.6418026938718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58372.90697674418,
            "unit": "ns",
            "range": "± 3189.920410690365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9847517.615384616,
            "unit": "ns",
            "range": "± 63841.73587935829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27547563.214285713,
            "unit": "ns",
            "range": "± 167739.0664331766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68341949.13333334,
            "unit": "ns",
            "range": "± 701271.6930068511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133352846.42857143,
            "unit": "ns",
            "range": "± 1326056.4345162525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265739816.53333333,
            "unit": "ns",
            "range": "± 2172441.2885192703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4155940.785714286,
            "unit": "ns",
            "range": "± 69489.12397156238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4339089.94117647,
            "unit": "ns",
            "range": "± 86208.81243923861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5325051.451612903,
            "unit": "ns",
            "range": "± 160100.66601398814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4743584,
            "unit": "ns",
            "range": "± 71756.12342743533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7720631.24,
            "unit": "ns",
            "range": "± 197565.41739642425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126560.851041666,
            "unit": "ns",
            "range": "± 14123.755740798488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954498.8145833334,
            "unit": "ns",
            "range": "± 3490.210079798197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323942.9053385416,
            "unit": "ns",
            "range": "± 4104.104404059661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224565.4598214286,
            "unit": "ns",
            "range": "± 5303.2316334179095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046688.2626953125,
            "unit": "ns",
            "range": "± 1961.6630327390355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935460.2266376202,
            "unit": "ns",
            "range": "± 794.0826873478555"
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
          "id": "6e453835cb77c6b3f3dc321227f3bfdfd448483f",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:08:35+09:00",
          "tree_id": "29dfaa733ed61c9dde318a47a1c6e553e87117a4",
          "url": "https://github.com/greymistcube/libplanet/commit/6e453835cb77c6b3f3dc321227f3bfdfd448483f"
        },
        "date": 1693401933821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664363.945945946,
            "unit": "ns",
            "range": "± 79696.31046252711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3248648.0967741935,
            "unit": "ns",
            "range": "± 92137.7736317937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271966.8958333335,
            "unit": "ns",
            "range": "± 259038.76733031703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5859325.486111111,
            "unit": "ns",
            "range": "± 287497.91068889294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346830.52459016396,
            "unit": "ns",
            "range": "± 15652.256558940158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328349.3958333333,
            "unit": "ns",
            "range": "± 12789.9299030561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291161.52173913043,
            "unit": "ns",
            "range": "± 11105.636658400355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5360151.466666667,
            "unit": "ns",
            "range": "± 63134.20364120802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4964516.266666667,
            "unit": "ns",
            "range": "± 39877.05156292753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27103.35789473684,
            "unit": "ns",
            "range": "± 2356.618447871141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114624.13043478261,
            "unit": "ns",
            "range": "± 7306.743691099013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100052.8762886598,
            "unit": "ns",
            "range": "± 6000.556389580559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112188.54081632652,
            "unit": "ns",
            "range": "± 15631.543850096576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8221.690721649484,
            "unit": "ns",
            "range": "± 828.0434313391106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25697.107526881722,
            "unit": "ns",
            "range": "± 1905.638809145372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60528.30107526882,
            "unit": "ns",
            "range": "± 3588.1925230234565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10278436.4,
            "unit": "ns",
            "range": "± 155236.34174003382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27136928.533333335,
            "unit": "ns",
            "range": "± 198867.6291211485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68553236.93333334,
            "unit": "ns",
            "range": "± 233915.7635534231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135675881.6,
            "unit": "ns",
            "range": "± 526925.0917841033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272835184.6923077,
            "unit": "ns",
            "range": "± 642829.0034605347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4441974.888888889,
            "unit": "ns",
            "range": "± 91422.76372139226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4525806.5,
            "unit": "ns",
            "range": "± 46287.62017870104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5326118.4,
            "unit": "ns",
            "range": "± 70143.96310120249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5124169.571428572,
            "unit": "ns",
            "range": "± 121267.64626419178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7717887.666666667,
            "unit": "ns",
            "range": "± 149621.0405110965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054710.058293269,
            "unit": "ns",
            "range": "± 11364.912441089735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879869.2947823661,
            "unit": "ns",
            "range": "± 1907.3545568432755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300860.7621694712,
            "unit": "ns",
            "range": "± 746.6431701998487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3253872.384014423,
            "unit": "ns",
            "range": "± 4491.398625193569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986744.0204427083,
            "unit": "ns",
            "range": "± 2624.433602589431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917939.7483072917,
            "unit": "ns",
            "range": "± 327.3371152804816"
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
          "id": "561388db874ed37d12dbe138a5506e189cb10b0e",
          "message": "Changelog",
          "timestamp": "2023-08-30T22:14:32+09:00",
          "tree_id": "74e2f45a3550b297940bb27b9019f6ac47b420ba",
          "url": "https://github.com/greymistcube/libplanet/commit/561388db874ed37d12dbe138a5506e189cb10b0e"
        },
        "date": 1693402143290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425332.2,
            "unit": "ns",
            "range": "± 94533.5697740878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683304.434782609,
            "unit": "ns",
            "range": "± 67561.6832066184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1827254.7222222222,
            "unit": "ns",
            "range": "± 101143.26813991675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5082689.584210526,
            "unit": "ns",
            "range": "± 290877.2406003789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283697.1707317073,
            "unit": "ns",
            "range": "± 9994.179941101818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272688.36842105264,
            "unit": "ns",
            "range": "± 5018.205524892188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246741.29166666666,
            "unit": "ns",
            "range": "± 9260.73460842004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4484228.142857143,
            "unit": "ns",
            "range": "± 39460.74767285966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044017.533333333,
            "unit": "ns",
            "range": "± 41106.10749349379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22322.260416666668,
            "unit": "ns",
            "range": "± 1529.3220599495203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91884.01030927835,
            "unit": "ns",
            "range": "± 6065.787642066166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77528.8705882353,
            "unit": "ns",
            "range": "± 4156.490898606188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87124.82653061225,
            "unit": "ns",
            "range": "± 14066.198791931465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5867.833333333333,
            "unit": "ns",
            "range": "± 688.648419452216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20484.865979381444,
            "unit": "ns",
            "range": "± 1339.6276506059587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50289.09302325582,
            "unit": "ns",
            "range": "± 2586.9956075721916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583676.130434783,
            "unit": "ns",
            "range": "± 215038.28697494444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22808320.92857143,
            "unit": "ns",
            "range": "± 310883.5142934666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57563659.2,
            "unit": "ns",
            "range": "± 238502.91740779308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115199746.33333333,
            "unit": "ns",
            "range": "± 489849.80427337793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228493014.93333334,
            "unit": "ns",
            "range": "± 844985.500837353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3612293.380952381,
            "unit": "ns",
            "range": "± 80245.5865163164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826339.3333333335,
            "unit": "ns",
            "range": "± 56965.50799220107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4520391.9,
            "unit": "ns",
            "range": "± 102985.81566507107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4216992.15,
            "unit": "ns",
            "range": "± 89483.90340124688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6394619.333333333,
            "unit": "ns",
            "range": "± 136447.89475021118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4954111.783653846,
            "unit": "ns",
            "range": "± 18161.728229730008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582731.184795673,
            "unit": "ns",
            "range": "± 764.7169348853696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082743.546940104,
            "unit": "ns",
            "range": "± 1049.8741827596887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588046.38046875,
            "unit": "ns",
            "range": "± 1670.8347213078846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831860.0814732143,
            "unit": "ns",
            "range": "± 894.5166913995333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748573.4424479167,
            "unit": "ns",
            "range": "± 289.247142415066"
          }
        ]
      }
    ]
  }
}