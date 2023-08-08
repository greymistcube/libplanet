window.BENCHMARK_DATA = {
  "lastUpdate": 1691463301879,
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
          "id": "8baa1b4083c0287391fb9c277de7b85761d2f44a",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-07T12:06:49+09:00",
          "tree_id": "89104245f00df6627deea8fceab4446cec039eb5",
          "url": "https://github.com/greymistcube/libplanet/commit/8baa1b4083c0287391fb9c277de7b85761d2f44a"
        },
        "date": 1691378961085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9518774.715789475,
            "unit": "ns",
            "range": "± 677735.5262273736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22370687.06,
            "unit": "ns",
            "range": "± 1603751.227809772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58947328.39473684,
            "unit": "ns",
            "range": "± 2017908.83997817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121647521.2113402,
            "unit": "ns",
            "range": "± 7020742.212563951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244926006.96470588,
            "unit": "ns",
            "range": "± 21943606.315768242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78655.7808988764,
            "unit": "ns",
            "range": "± 11884.220715826172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407897.7626262626,
            "unit": "ns",
            "range": "± 75265.92715323746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389028.21875,
            "unit": "ns",
            "range": "± 71386.36092725175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 400988.28350515466,
            "unit": "ns",
            "range": "± 69292.49654908334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4832792.414141414,
            "unit": "ns",
            "range": "± 537776.0160999246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4335566.170212766,
            "unit": "ns",
            "range": "± 333284.1878418892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22714.870967741936,
            "unit": "ns",
            "range": "± 4637.941555741518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112360.66666666667,
            "unit": "ns",
            "range": "± 24581.623481665767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127843.72340425532,
            "unit": "ns",
            "range": "± 20786.291175854425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136506.20833333334,
            "unit": "ns",
            "range": "± 25176.355581719785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8155.7032967032965,
            "unit": "ns",
            "range": "± 1049.2709161286498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29002.56179775281,
            "unit": "ns",
            "range": "± 6667.095943299479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695806.1134020619,
            "unit": "ns",
            "range": "± 201601.99442615043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102590.630952381,
            "unit": "ns",
            "range": "± 163052.56332007697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221128.3736842107,
            "unit": "ns",
            "range": "± 201201.6046421589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6098255.723404256,
            "unit": "ns",
            "range": "± 433277.60031314986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3703363.711340206,
            "unit": "ns",
            "range": "± 337683.3278207915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983118.907216495,
            "unit": "ns",
            "range": "± 499251.7754569515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5549457.207070707,
            "unit": "ns",
            "range": "± 637861.2481673401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738733.37113402,
            "unit": "ns",
            "range": "± 681662.1436417892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8124236.691919192,
            "unit": "ns",
            "range": "± 789448.9582789167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7919380.361111111,
            "unit": "ns",
            "range": "± 522906.64691493334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305166.0236328123,
            "unit": "ns",
            "range": "± 50291.29331870517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502242.4330873843,
            "unit": "ns",
            "range": "± 38483.92809322009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3899469.4112103176,
            "unit": "ns",
            "range": "± 178397.22035971808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996171.3961509146,
            "unit": "ns",
            "range": "± 35398.40992535268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799987.3569335938,
            "unit": "ns",
            "range": "± 24683.11939548594"
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
          "id": "917073df889842bbe7f26a42ba73d0c21ed374d8",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-08T11:32:27+09:00",
          "tree_id": "634f0b227c902d6970a46e0063cb1670be8af2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/917073df889842bbe7f26a42ba73d0c21ed374d8"
        },
        "date": 1691463039199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9016903.551282052,
            "unit": "ns",
            "range": "± 463721.15665900585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21858172.305555556,
            "unit": "ns",
            "range": "± 1079236.1072286482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54559130.96551724,
            "unit": "ns",
            "range": "± 2354854.3495778744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111686304.91176471,
            "unit": "ns",
            "range": "± 5329195.039324511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214615989.52173913,
            "unit": "ns",
            "range": "± 5324877.434074686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67796.32653061225,
            "unit": "ns",
            "range": "± 12388.320608562162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356521.1847826087,
            "unit": "ns",
            "range": "± 42542.55577316357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341608.48387096776,
            "unit": "ns",
            "range": "± 39370.63689825444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312368,
            "unit": "ns",
            "range": "± 4792.909289204778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4308315.439560439,
            "unit": "ns",
            "range": "± 240844.78298864828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685623.9166666665,
            "unit": "ns",
            "range": "± 95155.37959428193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18887.106382978724,
            "unit": "ns",
            "range": "± 3403.6158144268993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89033.39784946236,
            "unit": "ns",
            "range": "± 7855.769015769606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93597.97959183673,
            "unit": "ns",
            "range": "± 13909.470345908321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100103.31052631579,
            "unit": "ns",
            "range": "± 17457.063440444897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4946.021276595745,
            "unit": "ns",
            "range": "± 1102.6968307824718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16681.298850574713,
            "unit": "ns",
            "range": "± 2097.6808795525894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409496.6494845361,
            "unit": "ns",
            "range": "± 122271.16558511465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2897400.9555555554,
            "unit": "ns",
            "range": "± 160114.02025383763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2006419.03,
            "unit": "ns",
            "range": "± 207518.04821328583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5570260.567164179,
            "unit": "ns",
            "range": "± 252940.46892747158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212625.5,
            "unit": "ns",
            "range": "± 108197.79055388906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396332.597826087,
            "unit": "ns",
            "range": "± 191547.34197490098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451414.25949367,
            "unit": "ns",
            "range": "± 226421.31496049886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987805.0515463916,
            "unit": "ns",
            "range": "± 335779.63156968023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7112658.409638554,
            "unit": "ns",
            "range": "± 379049.7462038084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6884152.928385417,
            "unit": "ns",
            "range": "± 397017.6908703799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995673.7739583333,
            "unit": "ns",
            "range": "± 25963.010262148186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361124.9844599185,
            "unit": "ns",
            "range": "± 33052.841668953035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843178.0557930423,
            "unit": "ns",
            "range": "± 116703.5216385254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812529.178203125,
            "unit": "ns",
            "range": "± 20116.82621356939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761530.9854403409,
            "unit": "ns",
            "range": "± 18104.6943994555"
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
          "id": "5b05c68603eee8b1bbc15b694280e701f7e1a921",
          "message": "Changelog",
          "timestamp": "2023-08-08T11:35:19+09:00",
          "tree_id": "0f22f5d417c37c06ce4e19a79fa23616d7fae59e",
          "url": "https://github.com/greymistcube/libplanet/commit/5b05c68603eee8b1bbc15b694280e701f7e1a921"
        },
        "date": 1691463149570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8155989.62962963,
            "unit": "ns",
            "range": "± 225451.24127729467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20282655.861111112,
            "unit": "ns",
            "range": "± 674810.7601316368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48776498.184210524,
            "unit": "ns",
            "range": "± 1077348.3576928873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99893670.2,
            "unit": "ns",
            "range": "± 1511716.8268713178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210209089,
            "unit": "ns",
            "range": "± 2828937.5714509175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64591.436170212764,
            "unit": "ns",
            "range": "± 9658.246518828486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309527.1724137931,
            "unit": "ns",
            "range": "± 16658.52725993291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299481.3222222222,
            "unit": "ns",
            "range": "± 15831.316283778448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307486.35,
            "unit": "ns",
            "range": "± 13678.041757980229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219385.318181818,
            "unit": "ns",
            "range": "± 96901.30445796817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720196.785714286,
            "unit": "ns",
            "range": "± 106664.0705452671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17721.6,
            "unit": "ns",
            "range": "± 1783.1789769481318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86765.71875,
            "unit": "ns",
            "range": "± 8292.474506827355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86424.25263157894,
            "unit": "ns",
            "range": "± 8614.397611678603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110795.95833333333,
            "unit": "ns",
            "range": "± 13111.633589592078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4948.691489361702,
            "unit": "ns",
            "range": "± 917.4661111387605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16214.139784946237,
            "unit": "ns",
            "range": "± 1755.2470072142942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570262.95,
            "unit": "ns",
            "range": "± 164035.0149945127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2805885.042105263,
            "unit": "ns",
            "range": "± 173019.2614418748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1995852.0416666667,
            "unit": "ns",
            "range": "± 189067.73923437664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5378985.72972973,
            "unit": "ns",
            "range": "± 149519.18384249203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394316.2528089886,
            "unit": "ns",
            "range": "± 311679.40645248693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588263.802325581,
            "unit": "ns",
            "range": "± 327031.1425269256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4385560.481132075,
            "unit": "ns",
            "range": "± 169267.03197820648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3921349.964285714,
            "unit": "ns",
            "range": "± 109123.11916990389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7342161.729411765,
            "unit": "ns",
            "range": "± 394587.45469925046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6359319.83969351,
            "unit": "ns",
            "range": "± 260074.19857464332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2006524.3707682292,
            "unit": "ns",
            "range": "± 27265.46544842461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297032.0577566964,
            "unit": "ns",
            "range": "± 12631.270478461523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2896467.0234375,
            "unit": "ns",
            "range": "± 14409.521724910257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879555.4587053572,
            "unit": "ns",
            "range": "± 7805.773928510282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724217.5331380208,
            "unit": "ns",
            "range": "± 6906.763421915982"
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
          "id": "6f1cbb681a08f35155b7455926cad8dd9ba21871",
          "message": "Changelog",
          "timestamp": "2023-08-08T11:36:20+09:00",
          "tree_id": "b2c837c3bee4029f0e2efadb719459f3355923b1",
          "url": "https://github.com/greymistcube/libplanet/commit/6f1cbb681a08f35155b7455926cad8dd9ba21871"
        },
        "date": 1691463276826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8482822.133333333,
            "unit": "ns",
            "range": "± 250136.4761333209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21299975.57142857,
            "unit": "ns",
            "range": "± 1019988.1343388454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52837033.43103448,
            "unit": "ns",
            "range": "± 1525929.1300131567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108204865.23684211,
            "unit": "ns",
            "range": "± 3732177.622991431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226056387.15789473,
            "unit": "ns",
            "range": "± 7618415.338254032"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67250.73195876289,
            "unit": "ns",
            "range": "± 10491.316164567032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331632.1855670103,
            "unit": "ns",
            "range": "± 29654.178882835487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325017.8988764045,
            "unit": "ns",
            "range": "± 31996.786862492125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311075.54545454547,
            "unit": "ns",
            "range": "± 13218.711960026772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207134.133333334,
            "unit": "ns",
            "range": "± 177777.96819904854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3778524.447368421,
            "unit": "ns",
            "range": "± 78597.74814661866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18470.75257731959,
            "unit": "ns",
            "range": "± 3270.3282806385555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101997.95454545454,
            "unit": "ns",
            "range": "± 10702.269441068998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109093.79591836735,
            "unit": "ns",
            "range": "± 12637.31736442753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110797.70967741935,
            "unit": "ns",
            "range": "± 7829.073845193459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7723.106382978724,
            "unit": "ns",
            "range": "± 829.952304214313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20663.989361702126,
            "unit": "ns",
            "range": "± 2699.369972270833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545893.1836734693,
            "unit": "ns",
            "range": "± 159870.96684866116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844154.6626506024,
            "unit": "ns",
            "range": "± 150485.22247345356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1954623.7684210527,
            "unit": "ns",
            "range": "± 198980.31693283253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5595796,
            "unit": "ns",
            "range": "± 239301.4015222416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470941.0103092785,
            "unit": "ns",
            "range": "± 323198.37223888445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3675318.6276595746,
            "unit": "ns",
            "range": "± 334411.99325316283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4676807.944444444,
            "unit": "ns",
            "range": "± 420673.3773145146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4515760.694736842,
            "unit": "ns",
            "range": "± 602554.3498208642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7717643.242424242,
            "unit": "ns",
            "range": "± 818417.9195954226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6683458.367745535,
            "unit": "ns",
            "range": "± 34498.11521453202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018669.76390625,
            "unit": "ns",
            "range": "± 77518.90086403137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280898.2348257212,
            "unit": "ns",
            "range": "± 1888.9303240977704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755186.49921875,
            "unit": "ns",
            "range": "± 28014.51459711212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798833.1793619791,
            "unit": "ns",
            "range": "± 3101.135090113355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718985.7307291667,
            "unit": "ns",
            "range": "± 5172.03534995709"
          }
        ]
      }
    ]
  }
}