window.BENCHMARK_DATA = {
  "lastUpdate": 1687761532455,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756901534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461795.710144928,
            "unit": "ns",
            "range": "± 392801.68521083705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20819181.507462688,
            "unit": "ns",
            "range": "± 975566.3797922162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52853808.52941176,
            "unit": "ns",
            "range": "± 1656088.7379843798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107587139.16666667,
            "unit": "ns",
            "range": "± 3175585.1059790333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219932380.6276596,
            "unit": "ns",
            "range": "± 8413512.206705438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74750.27777777778,
            "unit": "ns",
            "range": "± 14550.845577018616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338417,
            "unit": "ns",
            "range": "± 38316.63792258817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325151.0206185567,
            "unit": "ns",
            "range": "± 34338.61994016946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325718.92553191487,
            "unit": "ns",
            "range": "± 33067.36827393869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4365396.828358209,
            "unit": "ns",
            "range": "± 205538.39247526185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833167.0454545454,
            "unit": "ns",
            "range": "± 93239.43305772728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17832.68817204301,
            "unit": "ns",
            "range": "± 2435.8680622980787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102438.82105263158,
            "unit": "ns",
            "range": "± 20316.086875046723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121568.875,
            "unit": "ns",
            "range": "± 20323.604709924446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125572.82105263158,
            "unit": "ns",
            "range": "± 22073.418501445976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7703.566666666667,
            "unit": "ns",
            "range": "± 1504.6401790924385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20985.372340425532,
            "unit": "ns",
            "range": "± 6145.212391640058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689737.2340425532,
            "unit": "ns",
            "range": "± 205627.76656838355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3193929.963917526,
            "unit": "ns",
            "range": "± 293121.27407625096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495295.0736842104,
            "unit": "ns",
            "range": "± 211216.44738389392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6633970.333333333,
            "unit": "ns",
            "range": "± 406426.4573767356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3487931.5102040814,
            "unit": "ns",
            "range": "± 329900.0910373916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3544062.7258064514,
            "unit": "ns",
            "range": "± 161222.0322204265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601288.225806451,
            "unit": "ns",
            "range": "± 309363.0915545303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557273.435483871,
            "unit": "ns",
            "range": "± 426027.32120351586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8085995.904255319,
            "unit": "ns",
            "range": "± 577683.9203985134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7889669.826690051,
            "unit": "ns",
            "range": "± 496611.8155221719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2485556.1306340145,
            "unit": "ns",
            "range": "± 98215.35755517111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380983.6521245218,
            "unit": "ns",
            "range": "± 92319.93360805203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614336.5583496094,
            "unit": "ns",
            "range": "± 120822.51563565608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865504.0510066106,
            "unit": "ns",
            "range": "± 6964.1542679424665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797290.8164911685,
            "unit": "ns",
            "range": "± 19932.753011273653"
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
          "id": "8581a13927baef9d93e13bae426720bdb6502dd9",
          "message": "Changelog",
          "timestamp": "2023-06-26T14:07:20+09:00",
          "tree_id": "e37edb61297c65896e4ff10848dc812439df6d36",
          "url": "https://github.com/greymistcube/libplanet/commit/8581a13927baef9d93e13bae426720bdb6502dd9"
        },
        "date": 1687757244171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8645730.633333333,
            "unit": "ns",
            "range": "± 253336.3115072917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23735918.13043478,
            "unit": "ns",
            "range": "± 6159557.326505462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52795655.7,
            "unit": "ns",
            "range": "± 1186408.0011021371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116196074.51111111,
            "unit": "ns",
            "range": "± 15523169.42797707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239864258.46067417,
            "unit": "ns",
            "range": "± 34444834.01635924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76240.22826086957,
            "unit": "ns",
            "range": "± 7454.3105401266375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336244.72222222225,
            "unit": "ns",
            "range": "± 25433.218808063335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320008.7252747253,
            "unit": "ns",
            "range": "± 25832.474621455294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339932.29347826086,
            "unit": "ns",
            "range": "± 57259.41891894207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259802.225490196,
            "unit": "ns",
            "range": "± 171651.42810172928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3747957.5,
            "unit": "ns",
            "range": "± 81170.94628827073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22196.436170212764,
            "unit": "ns",
            "range": "± 5113.788649924536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119281.55154639175,
            "unit": "ns",
            "range": "± 18798.181126757943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123283.53333333334,
            "unit": "ns",
            "range": "± 14274.26871438033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124853.72916666667,
            "unit": "ns",
            "range": "± 16778.984742185945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7315.836956521739,
            "unit": "ns",
            "range": "± 1042.075267547691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19625.52688172043,
            "unit": "ns",
            "range": "± 3059.9926136291847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701762.3956043955,
            "unit": "ns",
            "range": "± 223875.53187409387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023395.6626506024,
            "unit": "ns",
            "range": "± 154242.9355722121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2829911.7252747254,
            "unit": "ns",
            "range": "± 502674.835544456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6798480.483146068,
            "unit": "ns",
            "range": "± 622268.0271517418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295497.8333333335,
            "unit": "ns",
            "range": "± 200228.64941444653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487751.773809524,
            "unit": "ns",
            "range": "± 188268.0134922598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4508113.684931506,
            "unit": "ns",
            "range": "± 224082.6102006354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4326579.957894737,
            "unit": "ns",
            "range": "± 255941.79306169692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7601104.827586207,
            "unit": "ns",
            "range": "± 311290.31519407674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7261962.382465278,
            "unit": "ns",
            "range": "± 473524.72318340803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2070531.226453993,
            "unit": "ns",
            "range": "± 67953.9035359614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314562.6540670956,
            "unit": "ns",
            "range": "± 24069.81140838347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572484.9463404603,
            "unit": "ns",
            "range": "± 55551.806679348825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888272.6426478794,
            "unit": "ns",
            "range": "± 10422.431206796844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763625.8560412177,
            "unit": "ns",
            "range": "± 22089.96031905576"
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
          "id": "91b768284294b5dca70e81c297f5dbcc5a733588",
          "message": "Changelog",
          "timestamp": "2023-06-26T15:16:01+09:00",
          "tree_id": "1fedf46fd1341cd48d05cb47808ba084d1b40f41",
          "url": "https://github.com/greymistcube/libplanet/commit/91b768284294b5dca70e81c297f5dbcc5a733588"
        },
        "date": 1687761517665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9290239.788888888,
            "unit": "ns",
            "range": "± 945303.0975450785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33307333.010416668,
            "unit": "ns",
            "range": "± 13935159.642250815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68621678.84831461,
            "unit": "ns",
            "range": "± 12087242.070319744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133979983.57692307,
            "unit": "ns",
            "range": "± 28937482.777638912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272405761.24489796,
            "unit": "ns",
            "range": "± 54245086.308321044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78361.53448275862,
            "unit": "ns",
            "range": "± 8986.534993893449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371376.89130434784,
            "unit": "ns",
            "range": "± 49772.21111718415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349769.1397849462,
            "unit": "ns",
            "range": "± 42739.79402698823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359423.23076923075,
            "unit": "ns",
            "range": "± 38668.229531081146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4561232.1477272725,
            "unit": "ns",
            "range": "± 402325.17685278115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108050.3263157895,
            "unit": "ns",
            "range": "± 357864.283683593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25839.3595505618,
            "unit": "ns",
            "range": "± 4615.867519780376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118470.19387755102,
            "unit": "ns",
            "range": "± 25470.879950074283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122953.11363636363,
            "unit": "ns",
            "range": "± 16770.61950577939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130056.33695652174,
            "unit": "ns",
            "range": "± 21679.46392137452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8041.989010989011,
            "unit": "ns",
            "range": "± 1465.1099882451413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24668.037634408603,
            "unit": "ns",
            "range": "± 4403.041492164301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713121.6149425288,
            "unit": "ns",
            "range": "± 179975.5680525751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096764.9285714286,
            "unit": "ns",
            "range": "± 161765.97846806285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728843.577777778,
            "unit": "ns",
            "range": "± 324435.6613145798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7936407.106741573,
            "unit": "ns",
            "range": "± 1759306.8478102174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3731808.5113636362,
            "unit": "ns",
            "range": "± 599674.2770459144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3619182.876923077,
            "unit": "ns",
            "range": "± 166920.57487006616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4659382.769662921,
            "unit": "ns",
            "range": "± 346325.3706509164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5066127.239130435,
            "unit": "ns",
            "range": "± 763371.711000501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9161821.244186046,
            "unit": "ns",
            "range": "± 1722958.9925780192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7311434.013713431,
            "unit": "ns",
            "range": "± 281707.30581962503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2101717.529359879,
            "unit": "ns",
            "range": "± 94541.54632254835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434106.283669543,
            "unit": "ns",
            "range": "± 67769.27012601534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3355833.3569335938,
            "unit": "ns",
            "range": "± 242581.2611376351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892530.9385375977,
            "unit": "ns",
            "range": "± 16975.70396977752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851698.5027901785,
            "unit": "ns",
            "range": "± 13124.223668974382"
          }
        ]
      }
    ]
  }
}