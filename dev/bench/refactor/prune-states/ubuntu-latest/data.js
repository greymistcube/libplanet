window.BENCHMARK_DATA = {
  "lastUpdate": 1705569043091,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567276919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690308.6809895835,
            "unit": "ns",
            "range": "± 5563.169888882821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194413.4822716345,
            "unit": "ns",
            "range": "± 4186.20386071231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 804164.5723958333,
            "unit": "ns",
            "range": "± 14357.91802262711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929534.3560697115,
            "unit": "ns",
            "range": "± 11851.421029319008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618190.4635667067,
            "unit": "ns",
            "range": "± 1817.5212915435086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579046.6026141827,
            "unit": "ns",
            "range": "± 721.8932467433121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2490611.4571428574,
            "unit": "ns",
            "range": "± 80652.90417707623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2667115.8870967743,
            "unit": "ns",
            "range": "± 80794.30219542193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215983.5384615385,
            "unit": "ns",
            "range": "± 47571.42463639172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3014753.038961039,
            "unit": "ns",
            "range": "± 153691.30711826918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7013278.933333334,
            "unit": "ns",
            "range": "± 206293.6168733416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42399.52127659575,
            "unit": "ns",
            "range": "± 5581.039284895102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206455.8,
            "unit": "ns",
            "range": "± 19145.59280362578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194762.80701754385,
            "unit": "ns",
            "range": "± 8375.230694985996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172049.33333333334,
            "unit": "ns",
            "range": "± 3764.0909366950928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066748.433333333,
            "unit": "ns",
            "range": "± 42925.69532254323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771757.3571428573,
            "unit": "ns",
            "range": "± 41236.26057592655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12542.59090909091,
            "unit": "ns",
            "range": "± 1271.988900012687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65335.56989247312,
            "unit": "ns",
            "range": "± 6074.209441131896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69271.49,
            "unit": "ns",
            "range": "± 19395.15911876784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67031.07291666667,
            "unit": "ns",
            "range": "± 15256.849465935164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2945.7938144329896,
            "unit": "ns",
            "range": "± 809.3598027935456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14400.530612244898,
            "unit": "ns",
            "range": "± 3175.764949506992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5913972.916666667,
            "unit": "ns",
            "range": "± 23165.478549923584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15201841.714285715,
            "unit": "ns",
            "range": "± 112477.28940626778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38852419.666666664,
            "unit": "ns",
            "range": "± 364197.00743162556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75767910.78571428,
            "unit": "ns",
            "range": "± 721178.8739976296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151900986.5,
            "unit": "ns",
            "range": "± 1235583.7089626133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050472.5578947368,
            "unit": "ns",
            "range": "± 85965.87164420044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2039017.2272727273,
            "unit": "ns",
            "range": "± 73220.76427501228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1577121.3595505618,
            "unit": "ns",
            "range": "± 103992.1832621051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999916.357142857,
            "unit": "ns",
            "range": "± 196829.24493926545"
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
          "id": "495d6a63ec278b00b1670cfe939f427911395c13",
          "message": "Cleanup",
          "timestamp": "2024-01-18T17:49:25+09:00",
          "tree_id": "009385a465be7a7476be875e4213d904893c2914",
          "url": "https://github.com/greymistcube/libplanet/commit/495d6a63ec278b00b1670cfe939f427911395c13"
        },
        "date": 1705568416441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3778397.5748697915,
            "unit": "ns",
            "range": "± 12616.364757869993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215497.58203125,
            "unit": "ns",
            "range": "± 1590.7482454600008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759971.7336425781,
            "unit": "ns",
            "range": "± 1838.5695875214417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930919.5537109375,
            "unit": "ns",
            "range": "± 8131.7225974893945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640084.3913922991,
            "unit": "ns",
            "range": "± 5251.653612351671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580463.5116436298,
            "unit": "ns",
            "range": "± 1185.620480397217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398355.6071428573,
            "unit": "ns",
            "range": "± 66414.78526951287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580536.3913043477,
            "unit": "ns",
            "range": "± 98199.62739677631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146373.6756756757,
            "unit": "ns",
            "range": "± 87808.20156646152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3022741.9677419355,
            "unit": "ns",
            "range": "± 91643.16552748997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7267243.042857143,
            "unit": "ns",
            "range": "± 234417.65846019652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41098.3052631579,
            "unit": "ns",
            "range": "± 4757.068219410032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196932.4776119403,
            "unit": "ns",
            "range": "± 9360.400532673104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195969.41025641025,
            "unit": "ns",
            "range": "± 5511.246886895296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167792.08695652173,
            "unit": "ns",
            "range": "± 4104.704550468927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3009430.5625,
            "unit": "ns",
            "range": "± 48371.05383728131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2849342.9285714286,
            "unit": "ns",
            "range": "± 33142.913993130474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16165.8,
            "unit": "ns",
            "range": "± 1801.9516405535462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66000.56043956045,
            "unit": "ns",
            "range": "± 3895.4296816448627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54869.51546391752,
            "unit": "ns",
            "range": "± 5279.885760903911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63350.84693877551,
            "unit": "ns",
            "range": "± 16023.835879425491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2937.9893617021276,
            "unit": "ns",
            "range": "± 512.1726963177085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14807.268041237114,
            "unit": "ns",
            "range": "± 2006.565258280635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5677558.785714285,
            "unit": "ns",
            "range": "± 52815.79951903753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14180626.8,
            "unit": "ns",
            "range": "± 165068.87243996066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37063254.571428575,
            "unit": "ns",
            "range": "± 165207.71039778716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74480726.5,
            "unit": "ns",
            "range": "± 410093.719069331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149604667.33333334,
            "unit": "ns",
            "range": "± 1411540.2776125532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947060.4831460674,
            "unit": "ns",
            "range": "± 76745.15910231028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841782.4838709678,
            "unit": "ns",
            "range": "± 83798.21644522857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1400300.6021505375,
            "unit": "ns",
            "range": "± 116815.81699793201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5897619,
            "unit": "ns",
            "range": "± 215274.32023583306"
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
          "id": "68f2077e2ff4db26b123f780936181347efa6d4b",
          "message": "Added more tests",
          "timestamp": "2024-01-18T17:59:41+09:00",
          "tree_id": "705c92c4cf6548c4b414ddfaeb27786aaed27e59",
          "url": "https://github.com/greymistcube/libplanet/commit/68f2077e2ff4db26b123f780936181347efa6d4b"
        },
        "date": 1705569036679,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718833.1514423075,
            "unit": "ns",
            "range": "± 40962.90625843517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210141.2212611607,
            "unit": "ns",
            "range": "± 6033.592411708892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779765.8154994419,
            "unit": "ns",
            "range": "± 4500.461869608449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959343.4986979167,
            "unit": "ns",
            "range": "± 26803.732034709537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623518.9695870535,
            "unit": "ns",
            "range": "± 1649.5993768754938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575262.3870675223,
            "unit": "ns",
            "range": "± 1029.0686202505203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439924.6774193547,
            "unit": "ns",
            "range": "± 73994.86631579568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2607100.4615384615,
            "unit": "ns",
            "range": "± 27805.721957945352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113520.1428571427,
            "unit": "ns",
            "range": "± 41382.820184704186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2990021.8524590163,
            "unit": "ns",
            "range": "± 134085.8127405526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7052719.588235294,
            "unit": "ns",
            "range": "± 226648.73438136335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39304.65306122449,
            "unit": "ns",
            "range": "± 5305.426225096246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204633.31578947368,
            "unit": "ns",
            "range": "± 8762.382231036374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192148.79090909092,
            "unit": "ns",
            "range": "± 8175.771961904514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169743.59523809524,
            "unit": "ns",
            "range": "± 4011.2287133092013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100968.6153846155,
            "unit": "ns",
            "range": "± 18644.065510408676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2849645.923076923,
            "unit": "ns",
            "range": "± 21943.17668988676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16314.242105263158,
            "unit": "ns",
            "range": "± 2386.5138186733643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67156.30526315789,
            "unit": "ns",
            "range": "± 6902.836852960456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57912.936170212764,
            "unit": "ns",
            "range": "± 6922.5264450906025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65000.15306122449,
            "unit": "ns",
            "range": "± 12844.8581546241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4956.948979591837,
            "unit": "ns",
            "range": "± 1168.4160669973282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12683.595744680852,
            "unit": "ns",
            "range": "± 1967.7005592148378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5722391.4,
            "unit": "ns",
            "range": "± 45068.05541907863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14759927.6875,
            "unit": "ns",
            "range": "± 276698.5632489427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36870847.14285714,
            "unit": "ns",
            "range": "± 225661.18037501987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78283453.5,
            "unit": "ns",
            "range": "± 535061.397458896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151880793.07142857,
            "unit": "ns",
            "range": "± 713617.011699118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967851.1428571428,
            "unit": "ns",
            "range": "± 80995.54544247362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884062.3272727274,
            "unit": "ns",
            "range": "± 74888.95592291458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1436497.907216495,
            "unit": "ns",
            "range": "± 121577.96183957114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5830219.327272727,
            "unit": "ns",
            "range": "± 246968.3717857076"
          }
        ]
      }
    ]
  }
}