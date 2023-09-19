window.BENCHMARK_DATA = {
  "lastUpdate": 1695088576796,
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
          "id": "86231891c004ef7bec83a29f3f51478f5228fd50",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:40:37+09:00",
          "tree_id": "c1b09f4047d1684df6c3011fc1869c6becd44299",
          "url": "https://github.com/greymistcube/libplanet/commit/86231891c004ef7bec83a29f3f51478f5228fd50"
        },
        "date": 1695085213201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9989919.67,
            "unit": "ns",
            "range": "± 1624288.6502266002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24138399.908163264,
            "unit": "ns",
            "range": "± 2959116.5932752024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56390021.8,
            "unit": "ns",
            "range": "± 7297601.7361825565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117652251.94,
            "unit": "ns",
            "range": "± 12347576.90584439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245027603.7777778,
            "unit": "ns",
            "range": "± 25028020.517739084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73086.7258064516,
            "unit": "ns",
            "range": "± 17762.1571393211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307394.0444444445,
            "unit": "ns",
            "range": "± 21390.82442213663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291225.0657894737,
            "unit": "ns",
            "range": "± 14432.308261984545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284599.8125,
            "unit": "ns",
            "range": "± 13048.631215541589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3992846.64516129,
            "unit": "ns",
            "range": "± 121536.13911221315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899359.5555555555,
            "unit": "ns",
            "range": "± 399854.5174133839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18854.81182795699,
            "unit": "ns",
            "range": "± 2087.871487270847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115089.77894736842,
            "unit": "ns",
            "range": "± 25025.954947740967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103683.19696969698,
            "unit": "ns",
            "range": "± 21657.91346511334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102168.04166666667,
            "unit": "ns",
            "range": "± 17644.05315764563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6338.974226804124,
            "unit": "ns",
            "range": "± 1290.1084183508208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19414.202127659573,
            "unit": "ns",
            "range": "± 2900.9307574949753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556166.1235955057,
            "unit": "ns",
            "range": "± 128017.49431317262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920181.5,
            "unit": "ns",
            "range": "± 271625.92266245646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243447.797979798,
            "unit": "ns",
            "range": "± 401574.2397714778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5587145.234042553,
            "unit": "ns",
            "range": "± 433225.7499445214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356659.976744186,
            "unit": "ns",
            "range": "± 253704.33858571888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547424.3735632184,
            "unit": "ns",
            "range": "± 411413.8331619903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4456383.3977272725,
            "unit": "ns",
            "range": "± 264740.61883697566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3890393.902173913,
            "unit": "ns",
            "range": "± 464222.31235850113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6774179.795180723,
            "unit": "ns",
            "range": "± 398392.4586942905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5857603.391539229,
            "unit": "ns",
            "range": "± 412108.70605606394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1689612.7848958333,
            "unit": "ns",
            "range": "± 22828.334591185278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991413.8920572917,
            "unit": "ns",
            "range": "± 13826.855183844096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2429201.6377604166,
            "unit": "ns",
            "range": "± 27221.933372941698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817189.9873798077,
            "unit": "ns",
            "range": "± 10221.932458472453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751403.1835673564,
            "unit": "ns",
            "range": "± 25516.832936425675"
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
          "id": "22278b2f685b047b90c1d0e7d91c565e35236b59",
          "message": "Use HashDigest instead of IAccount",
          "timestamp": "2023-09-19T09:49:30+09:00",
          "tree_id": "bbc406acfa1d2e0ed2fd9c70074284587684575b",
          "url": "https://github.com/greymistcube/libplanet/commit/22278b2f685b047b90c1d0e7d91c565e35236b59"
        },
        "date": 1695085747061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9448918.161764706,
            "unit": "ns",
            "range": "± 449362.48037665215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22226328.166666668,
            "unit": "ns",
            "range": "± 983707.9255859515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60582474.02061856,
            "unit": "ns",
            "range": "± 3499013.346961775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113299216.8076923,
            "unit": "ns",
            "range": "± 1068304.500970376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236814640.9090909,
            "unit": "ns",
            "range": "± 4961729.134443401"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79227.37368421053,
            "unit": "ns",
            "range": "± 13660.875441747443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319178.9693877551,
            "unit": "ns",
            "range": "± 26985.836275894115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336847.8010752688,
            "unit": "ns",
            "range": "± 32422.830951481832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326331.41414141416,
            "unit": "ns",
            "range": "± 21097.0888276133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234207.109756097,
            "unit": "ns",
            "range": "± 151059.36117763078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3786923.6,
            "unit": "ns",
            "range": "± 151532.8704400333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28407.59574468085,
            "unit": "ns",
            "range": "± 6608.301161677074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108733.09375,
            "unit": "ns",
            "range": "± 14722.537087263705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94153.80898876404,
            "unit": "ns",
            "range": "± 8231.563538760152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110897.81720430107,
            "unit": "ns",
            "range": "± 15674.319877032205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7572.989583333333,
            "unit": "ns",
            "range": "± 1109.2726967161072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21285.257894736842,
            "unit": "ns",
            "range": "± 3599.4742338167134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1661089.7653061224,
            "unit": "ns",
            "range": "± 206539.99083063946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050682.5,
            "unit": "ns",
            "range": "± 229257.4088457794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2297407,
            "unit": "ns",
            "range": "± 378493.82169428363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5932565.988764045,
            "unit": "ns",
            "range": "± 453877.2676660633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3579023,
            "unit": "ns",
            "range": "± 203223.3760594346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3753532.25,
            "unit": "ns",
            "range": "± 103847.3691589319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4756876.415789474,
            "unit": "ns",
            "range": "± 372978.10326680494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3822837.7391304346,
            "unit": "ns",
            "range": "± 146101.00966925206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6779834.590909091,
            "unit": "ns",
            "range": "± 343717.0945690726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5495821.653515625,
            "unit": "ns",
            "range": "± 121140.57058240114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1705849.5639322917,
            "unit": "ns",
            "range": "± 11439.657120767259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124620.4069010417,
            "unit": "ns",
            "range": "± 6050.388349064956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562115.0778808594,
            "unit": "ns",
            "range": "± 103193.26829195402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781988.047281901,
            "unit": "ns",
            "range": "± 2408.2519649535097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820620.63125,
            "unit": "ns",
            "range": "± 4947.879932383178"
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
          "id": "d4f6077e3af48c1eea5f1c5a23b3041c0617605a",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:36:30+09:00",
          "tree_id": "15cb617948f85d7aaab0ab64dcea007e69a2e0fe",
          "url": "https://github.com/greymistcube/libplanet/commit/d4f6077e3af48c1eea5f1c5a23b3041c0617605a"
        },
        "date": 1695088465915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8727959.984375,
            "unit": "ns",
            "range": "± 401371.1435949448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22059933.775862068,
            "unit": "ns",
            "range": "± 631724.9277962169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55331612.72727273,
            "unit": "ns",
            "range": "± 1349389.4677282118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106624505.23333333,
            "unit": "ns",
            "range": "± 1913089.5939317439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218359943.4811321,
            "unit": "ns",
            "range": "± 9070603.025656236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72163.77777777778,
            "unit": "ns",
            "range": "± 11315.357666401966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335176.3369565217,
            "unit": "ns",
            "range": "± 34971.049232210586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315533.4505494505,
            "unit": "ns",
            "range": "± 29776.639672088862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301945.5737704918,
            "unit": "ns",
            "range": "± 13523.502600360871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4107689.4594594594,
            "unit": "ns",
            "range": "± 137885.12689606575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3527243.0434782607,
            "unit": "ns",
            "range": "± 85681.65030426095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17290.53846153846,
            "unit": "ns",
            "range": "± 1561.4625288683135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93055.96875,
            "unit": "ns",
            "range": "± 12770.629916832504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101819.97916666667,
            "unit": "ns",
            "range": "± 18717.195521472626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108126.97959183673,
            "unit": "ns",
            "range": "± 19047.91812161162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7373.371134020618,
            "unit": "ns",
            "range": "± 1736.1315733524948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22183.082474226805,
            "unit": "ns",
            "range": "± 3933.4686523424184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1750227.2052631578,
            "unit": "ns",
            "range": "± 254423.0986262289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3141500.7577319588,
            "unit": "ns",
            "range": "± 305507.9877884836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048736.6354166667,
            "unit": "ns",
            "range": "± 265249.4121286058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5486214.578947368,
            "unit": "ns",
            "range": "± 266706.2917440713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3617362.8494623657,
            "unit": "ns",
            "range": "± 191025.8940180935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797574.3105263156,
            "unit": "ns",
            "range": "± 304967.11798216327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4569142.193877551,
            "unit": "ns",
            "range": "± 331801.1702785877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3979164.216494845,
            "unit": "ns",
            "range": "± 267634.07896589214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7644629.35,
            "unit": "ns",
            "range": "± 398344.0596990197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5798643.396634615,
            "unit": "ns",
            "range": "± 84564.45388880653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1702745.6440104167,
            "unit": "ns",
            "range": "± 30732.322840315646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 999162.47734375,
            "unit": "ns",
            "range": "± 12766.882722489681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588467.1180245536,
            "unit": "ns",
            "range": "± 40531.347079751366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860378.127355239,
            "unit": "ns",
            "range": "± 34899.744620517165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833741.5500300481,
            "unit": "ns",
            "range": "± 8341.864782890716"
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
          "id": "0fd63b707195acad0f115782cea32403441527ef",
          "message": "Changelog",
          "timestamp": "2023-09-19T10:40:20+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/greymistcube/libplanet/commit/0fd63b707195acad0f115782cea32403441527ef"
        },
        "date": 1695088559637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7838487.538461538,
            "unit": "ns",
            "range": "± 74142.76814881699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19835939.48837209,
            "unit": "ns",
            "range": "± 689860.6785083966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47604298.884615384,
            "unit": "ns",
            "range": "± 1282759.6792188105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95547657.46153846,
            "unit": "ns",
            "range": "± 586309.9482198836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194583621.41666666,
            "unit": "ns",
            "range": "± 1218428.1878433272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59184.09782608696,
            "unit": "ns",
            "range": "± 8760.513238339185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282276.46774193546,
            "unit": "ns",
            "range": "± 11976.380463526495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285638.0602409639,
            "unit": "ns",
            "range": "± 15199.536087552628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290877.6770833333,
            "unit": "ns",
            "range": "± 16757.845256849756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898213.0172413792,
            "unit": "ns",
            "range": "± 112312.21560378038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3604054.90625,
            "unit": "ns",
            "range": "± 109540.57671500293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17952.83146067416,
            "unit": "ns",
            "range": "± 2228.773033001643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83241.26288659793,
            "unit": "ns",
            "range": "± 8421.62506063655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108864.35567010309,
            "unit": "ns",
            "range": "± 12181.44653423607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111250.26041666667,
            "unit": "ns",
            "range": "± 14619.568568941959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5118.903225806452,
            "unit": "ns",
            "range": "± 881.4432589757716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18099.467391304348,
            "unit": "ns",
            "range": "± 2477.653398189979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517594.8762886599,
            "unit": "ns",
            "range": "± 161509.85755695493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2868721.3285714285,
            "unit": "ns",
            "range": "± 138609.95351085646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997769.8958333333,
            "unit": "ns",
            "range": "± 217873.53713272724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442151.134615385,
            "unit": "ns",
            "range": "± 223466.18735605644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3154227.523809524,
            "unit": "ns",
            "range": "± 72941.33472703872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3313124.705882353,
            "unit": "ns",
            "range": "± 134115.69419993978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4123246.488372093,
            "unit": "ns",
            "range": "± 152026.9047979544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3650840.6470588236,
            "unit": "ns",
            "range": "± 113332.28843053493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6526141.352941177,
            "unit": "ns",
            "range": "± 265955.2072296254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5374866.585491071,
            "unit": "ns",
            "range": "± 175116.88222570537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1614218.816127232,
            "unit": "ns",
            "range": "± 5828.731290359101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 975253.6159319197,
            "unit": "ns",
            "range": "± 11072.068861966098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586338.75390625,
            "unit": "ns",
            "range": "± 28813.87173401457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774369.8473144531,
            "unit": "ns",
            "range": "± 17764.431384821717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734638.1916015625,
            "unit": "ns",
            "range": "± 3467.6676779872937"
          }
        ]
      }
    ]
  }
}