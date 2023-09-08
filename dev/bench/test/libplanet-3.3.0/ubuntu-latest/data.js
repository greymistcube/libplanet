window.BENCHMARK_DATA = {
  "lastUpdate": 1694174110651,
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
      }
    ]
  }
}