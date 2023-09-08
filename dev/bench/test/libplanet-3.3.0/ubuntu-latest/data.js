window.BENCHMARK_DATA = {
  "lastUpdate": 1694186630951,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694079864169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364891.1515151516,
            "unit": "ns",
            "range": "± 101507.8847733036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596167.411764706,
            "unit": "ns",
            "range": "± 83806.76715611124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686527.855670103,
            "unit": "ns",
            "range": "± 105533.06227384676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4456397.842105263,
            "unit": "ns",
            "range": "± 149556.8680090523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268896.1951219512,
            "unit": "ns",
            "range": "± 8549.416197084782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265591.5,
            "unit": "ns",
            "range": "± 7624.695343033325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220784.64285714287,
            "unit": "ns",
            "range": "± 2803.326529655105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4194831.133333334,
            "unit": "ns",
            "range": "± 41689.95601523682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863099.2,
            "unit": "ns",
            "range": "± 31588.964262403864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19464.797872340427,
            "unit": "ns",
            "range": "± 1366.3290633089587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86494.88888888889,
            "unit": "ns",
            "range": "± 3882.7259633935064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69035.35714285714,
            "unit": "ns",
            "range": "± 1004.22581027475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80656.71428571429,
            "unit": "ns",
            "range": "± 11436.801524613515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4645.350515463918,
            "unit": "ns",
            "range": "± 569.3628024898592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18575.36170212766,
            "unit": "ns",
            "range": "± 1175.9212983966563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46453.80459770115,
            "unit": "ns",
            "range": "± 2550.5962815793723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7844890.666666667,
            "unit": "ns",
            "range": "± 60813.75232352191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20051192.133333333,
            "unit": "ns",
            "range": "± 65854.20097443255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51334311.06666667,
            "unit": "ns",
            "range": "± 232634.18550575024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101857602.92857143,
            "unit": "ns",
            "range": "± 290722.95105728414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204809040.4,
            "unit": "ns",
            "range": "± 322014.54604096914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304818.55,
            "unit": "ns",
            "range": "± 74390.16151663507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3489720.3333333335,
            "unit": "ns",
            "range": "± 95903.54726093696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293703.733333333,
            "unit": "ns",
            "range": "± 56715.83432399339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856307.172413793,
            "unit": "ns",
            "range": "± 111880.32506275526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6001805.033333333,
            "unit": "ns",
            "range": "± 138268.204547759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5097527.827604166,
            "unit": "ns",
            "range": "± 32022.20462610154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543691.420703125,
            "unit": "ns",
            "range": "± 4978.052538080369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079521.8875558036,
            "unit": "ns",
            "range": "± 717.2079337263386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913934.834542411,
            "unit": "ns",
            "range": "± 1678.4084027669098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820541.1160714285,
            "unit": "ns",
            "range": "± 11955.388494003379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748724.5966796875,
            "unit": "ns",
            "range": "± 222.48573156135004"
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
          "id": "f24a4327a1ed2583f43238d02507c97d43621e7e",
          "message": "Remove metrics",
          "timestamp": "2023-09-07T22:12:39+09:00",
          "tree_id": "cdc7d99617b6a4f2ea2964420c4ae7788e6e8fc9",
          "url": "https://github.com/greymistcube/libplanet/commit/f24a4327a1ed2583f43238d02507c97d43621e7e"
        },
        "date": 1694093332785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510074.4175824176,
            "unit": "ns",
            "range": "± 84123.11570959765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2936111.90625,
            "unit": "ns",
            "range": "± 85913.80504614527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1902717.7272727273,
            "unit": "ns",
            "range": "± 96670.78039933654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4782046.962962963,
            "unit": "ns",
            "range": "± 128813.05012646501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295501.0540540541,
            "unit": "ns",
            "range": "± 9994.33820538727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286119.6603773585,
            "unit": "ns",
            "range": "± 11883.034444669744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255113.1791044776,
            "unit": "ns",
            "range": "± 12065.209475790643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4613479.133333334,
            "unit": "ns",
            "range": "± 19326.295010635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4290468.533333333,
            "unit": "ns",
            "range": "± 42642.47324954423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24356.77319587629,
            "unit": "ns",
            "range": "± 2413.076556775062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99006.39024390244,
            "unit": "ns",
            "range": "± 5251.595350212428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87218.48453608247,
            "unit": "ns",
            "range": "± 6265.4107475644305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90640.9247311828,
            "unit": "ns",
            "range": "± 12012.596686700028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6720.309278350515,
            "unit": "ns",
            "range": "± 862.9293057277919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22862.242105263158,
            "unit": "ns",
            "range": "± 1790.6946988784173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53042.43010752688,
            "unit": "ns",
            "range": "± 3816.761968173072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8614336.222222222,
            "unit": "ns",
            "range": "± 183962.00148993544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23078799.2,
            "unit": "ns",
            "range": "± 218197.33460831144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58567750.93333333,
            "unit": "ns",
            "range": "± 284100.8043739472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116900801.66666667,
            "unit": "ns",
            "range": "± 446701.1241371359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232163209.15384614,
            "unit": "ns",
            "range": "± 380741.1601873478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3766471.0625,
            "unit": "ns",
            "range": "± 72048.22494363874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988182.222222222,
            "unit": "ns",
            "range": "± 110754.71999920618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4642122.461538462,
            "unit": "ns",
            "range": "± 60628.7481777627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4308628.75,
            "unit": "ns",
            "range": "± 64062.747960140965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6508798.230769231,
            "unit": "ns",
            "range": "± 171488.40790871147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5110485.44921875,
            "unit": "ns",
            "range": "± 20706.020700718655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1600109.69140625,
            "unit": "ns",
            "range": "± 1663.8226118971165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080424.2677176339,
            "unit": "ns",
            "range": "± 563.8495641854056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635667.5145089286,
            "unit": "ns",
            "range": "± 2823.3301077538317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829036.8341796875,
            "unit": "ns",
            "range": "± 290.23479048029304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774257.2294224331,
            "unit": "ns",
            "range": "± 272.4548373450848"
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
          "id": "ef5555cd29e15a4e969485539a0ee47e8da59eae",
          "message": "More caching",
          "timestamp": "2023-09-08T20:40:03+09:00",
          "tree_id": "3b0d2d056f0818d09d76a7fd624d6c5176d26d78",
          "url": "https://github.com/greymistcube/libplanet/commit/ef5555cd29e15a4e969485539a0ee47e8da59eae"
        },
        "date": 1694174103138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488200.3243243243,
            "unit": "ns",
            "range": "± 74404.01986067435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767323.970588235,
            "unit": "ns",
            "range": "± 87507.78386624201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1879167.831168831,
            "unit": "ns",
            "range": "± 93279.91289243962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5404133.04,
            "unit": "ns",
            "range": "± 404617.35041930905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273154.28301886795,
            "unit": "ns",
            "range": "± 10239.946432359433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268477.7962962963,
            "unit": "ns",
            "range": "± 11309.195601208829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237060.8108108108,
            "unit": "ns",
            "range": "± 7144.33740741512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4568020.266666667,
            "unit": "ns",
            "range": "± 83908.80829164368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4218353.647058823,
            "unit": "ns",
            "range": "± 85638.17572492216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21601.145833333332,
            "unit": "ns",
            "range": "± 2424.4163355295345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91376.6052631579,
            "unit": "ns",
            "range": "± 4659.135579565369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73653.64615384616,
            "unit": "ns",
            "range": "± 3309.0043037463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81448.34375,
            "unit": "ns",
            "range": "± 12484.007739443567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5190.677083333333,
            "unit": "ns",
            "range": "± 564.0237116104003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19268.547368421052,
            "unit": "ns",
            "range": "± 1668.825652637979"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49128.36046511628,
            "unit": "ns",
            "range": "± 2691.862407605082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8517382.6875,
            "unit": "ns",
            "range": "± 265177.5716960408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22748415.6,
            "unit": "ns",
            "range": "± 343003.75505916215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56689825.13333333,
            "unit": "ns",
            "range": "± 552553.5097566656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114563856.8,
            "unit": "ns",
            "range": "± 2083802.8550621164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228698800.06666666,
            "unit": "ns",
            "range": "± 2183576.1881728224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3590255.4594594594,
            "unit": "ns",
            "range": "± 119520.18710233629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727802.125,
            "unit": "ns",
            "range": "± 92966.98151088141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4487851.612903226,
            "unit": "ns",
            "range": "± 134786.2319681743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4129076,
            "unit": "ns",
            "range": "± 120572.01345327393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6502437.931034483,
            "unit": "ns",
            "range": "± 187016.92253375112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065010.1875,
            "unit": "ns",
            "range": "± 13223.608020131893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567197.6183035714,
            "unit": "ns",
            "range": "± 2205.1584891073767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1093532.0341145834,
            "unit": "ns",
            "range": "± 3399.947429510528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716402.572395833,
            "unit": "ns",
            "range": "± 8793.780360710894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826561.6958333333,
            "unit": "ns",
            "range": "± 1452.8524301472394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747762.8379557292,
            "unit": "ns",
            "range": "± 815.2201532050418"
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
          "id": "ba5e7833214ca8143f1722794446e97c1e2c0d51",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-08T21:36:41+09:00",
          "tree_id": "1317f701bc3f6339a40fc2b723aa5cbf8d575424",
          "url": "https://github.com/greymistcube/libplanet/commit/ba5e7833214ca8143f1722794446e97c1e2c0d51"
        },
        "date": 1694177405682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449287.642857143,
            "unit": "ns",
            "range": "± 93108.15808833882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710466.523809524,
            "unit": "ns",
            "range": "± 97056.39663800155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856761,
            "unit": "ns",
            "range": "± 98265.69994813194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4721001.692307692,
            "unit": "ns",
            "range": "± 52878.914919503615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286733.70588235295,
            "unit": "ns",
            "range": "± 5630.790372637596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266645.86842105264,
            "unit": "ns",
            "range": "± 8462.186472841282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240846.81666666668,
            "unit": "ns",
            "range": "± 10687.66343713537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358257.333333333,
            "unit": "ns",
            "range": "± 101322.87389791771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3997524,
            "unit": "ns",
            "range": "± 55958.45679226178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21639.273684210526,
            "unit": "ns",
            "range": "± 1844.2951167022052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85601.05633802817,
            "unit": "ns",
            "range": "± 4204.402464381231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70886.71428571429,
            "unit": "ns",
            "range": "± 1068.3251758330332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75076,
            "unit": "ns",
            "range": "± 5217.484726551183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5243.84375,
            "unit": "ns",
            "range": "± 737.8301805489847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19406.427083333332,
            "unit": "ns",
            "range": "± 1436.8798488009884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48236.81967213115,
            "unit": "ns",
            "range": "± 2172.7001212638365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7896157.642857143,
            "unit": "ns",
            "range": "± 44104.29906763345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22393332.066666666,
            "unit": "ns",
            "range": "± 236281.02463333984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55076222.6,
            "unit": "ns",
            "range": "± 533526.6307542403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111643039,
            "unit": "ns",
            "range": "± 1471506.8632830873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223886307.2857143,
            "unit": "ns",
            "range": "± 2160872.359805941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3672221.533333333,
            "unit": "ns",
            "range": "± 61083.719375094035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3967657.1333333333,
            "unit": "ns",
            "range": "± 74059.14921376471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486103.631578947,
            "unit": "ns",
            "range": "± 98338.23702700261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4238337.466666667,
            "unit": "ns",
            "range": "± 77042.86699147863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6559539,
            "unit": "ns",
            "range": "± 88564.3258888919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5003945.362379808,
            "unit": "ns",
            "range": "± 9628.760632171256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590937.7234933036,
            "unit": "ns",
            "range": "± 2788.1576858662625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072560.959765625,
            "unit": "ns",
            "range": "± 1631.671001842697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626889.5875,
            "unit": "ns",
            "range": "± 1642.2467470012123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826804.2582682292,
            "unit": "ns",
            "range": "± 671.5822533837868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751808.124609375,
            "unit": "ns",
            "range": "± 563.8749901245524"
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
          "id": "63c94c408040a87c9c6ca1a4d39782905189e59d",
          "message": "Detailed logging; huge cache",
          "timestamp": "2023-09-09T00:11:19+09:00",
          "tree_id": "b872e70bed61f03f3edf55a49e14b57f2bbd4c5a",
          "url": "https://github.com/greymistcube/libplanet/commit/63c94c408040a87c9c6ca1a4d39782905189e59d"
        },
        "date": 1694186623433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326215.7525773195,
            "unit": "ns",
            "range": "± 86853.48989426473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512818.472222222,
            "unit": "ns",
            "range": "± 83393.01635799558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1712107.8865979381,
            "unit": "ns",
            "range": "± 104036.86371064548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4504356.375,
            "unit": "ns",
            "range": "± 115380.68274113211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269277.1052631579,
            "unit": "ns",
            "range": "± 9004.64747209619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257483.27659574468,
            "unit": "ns",
            "range": "± 9473.104283689572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224227,
            "unit": "ns",
            "range": "± 2343.722089064578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174298.1333333333,
            "unit": "ns",
            "range": "± 30296.16520256239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860654.7333333334,
            "unit": "ns",
            "range": "± 42624.85328247337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18586.525773195877,
            "unit": "ns",
            "range": "± 1345.7068936435069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85179.44,
            "unit": "ns",
            "range": "± 4226.558146203982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69965.91666666667,
            "unit": "ns",
            "range": "± 885.3026661012947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78651.54639175258,
            "unit": "ns",
            "range": "± 11794.347435866453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4699.948453608247,
            "unit": "ns",
            "range": "± 748.6126386402776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17779.606382978724,
            "unit": "ns",
            "range": "± 1808.886434722274"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46610.93548387097,
            "unit": "ns",
            "range": "± 2127.297245224542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7623013.866666666,
            "unit": "ns",
            "range": "± 43548.668618105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19713677.57142857,
            "unit": "ns",
            "range": "± 164742.3135705318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51017366.428571425,
            "unit": "ns",
            "range": "± 521493.38776997186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102207752,
            "unit": "ns",
            "range": "± 1096079.2679456563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205517094.66666666,
            "unit": "ns",
            "range": "± 938546.7002197498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204775.9565217393,
            "unit": "ns",
            "range": "± 63116.48035935281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433700.875,
            "unit": "ns",
            "range": "± 53966.33315055477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4223584.666666667,
            "unit": "ns",
            "range": "± 71419.8868890038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3832363.7586206896,
            "unit": "ns",
            "range": "± 109697.10680930702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6191245.0625,
            "unit": "ns",
            "range": "± 116667.62599594271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4933701.707682292,
            "unit": "ns",
            "range": "± 2358.033154839982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594894.4857271635,
            "unit": "ns",
            "range": "± 950.501355411669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070539.8612530048,
            "unit": "ns",
            "range": "± 467.1520398655941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631472.3895089286,
            "unit": "ns",
            "range": "± 3574.0581935914706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814168.5123046875,
            "unit": "ns",
            "range": "± 770.0725531221716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727709.4521484375,
            "unit": "ns",
            "range": "± 821.912338983848"
          }
        ]
      }
    ]
  }
}