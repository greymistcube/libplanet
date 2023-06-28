window.BENCHMARK_DATA = {
  "lastUpdate": 1687933782709,
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
          "id": "c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca",
          "message": "Use mocked state for testing; make AccountStateDelta creator private",
          "timestamp": "2023-06-27T19:17:10+09:00",
          "tree_id": "cfb95f884f28b3ef3c68c89991ef131469521fa8",
          "url": "https://github.com/greymistcube/libplanet/commit/c08310f4a0be5bf19f4a5d5d56e4281bee8c92ca"
        },
        "date": 1687930529299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3729164.824742268,
            "unit": "ns",
            "range": "± 253163.76041527823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4030733.3440860217,
            "unit": "ns",
            "range": "± 313687.4179328183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5154448.928571428,
            "unit": "ns",
            "range": "± 406592.7601938919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972199.591836735,
            "unit": "ns",
            "range": "± 415237.302202573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9086031.505376345,
            "unit": "ns",
            "range": "± 546982.2648868542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9144888.717948718,
            "unit": "ns",
            "range": "± 313571.38840511756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22947053.56521739,
            "unit": "ns",
            "range": "± 572255.4051381275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63989728.010752685,
            "unit": "ns",
            "range": "± 3625755.4509214065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125783813.31460674,
            "unit": "ns",
            "range": "± 6727559.362973694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248456288.84313726,
            "unit": "ns",
            "range": "± 10045096.590080597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371217.77,
            "unit": "ns",
            "range": "± 58756.65356002525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344981.81052631576,
            "unit": "ns",
            "range": "± 54863.673048844685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310756.1919191919,
            "unit": "ns",
            "range": "± 52918.19519453082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4890650.161290322,
            "unit": "ns",
            "range": "± 330722.0605775796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4566321.285714285,
            "unit": "ns",
            "range": "± 303955.2449365756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22570.19587628866,
            "unit": "ns",
            "range": "± 8078.490889701046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101441.64893617021,
            "unit": "ns",
            "range": "± 18576.43148289977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105484.97938144329,
            "unit": "ns",
            "range": "± 25002.98702112884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128530.83870967742,
            "unit": "ns",
            "range": "± 32699.54839878637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5580.489130434783,
            "unit": "ns",
            "range": "± 856.8469094617666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23133.2,
            "unit": "ns",
            "range": "± 10044.469203285831"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59528.53125,
            "unit": "ns",
            "range": "± 14665.032270463984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6915105.919497282,
            "unit": "ns",
            "range": "± 166962.00316419423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2318061.1944110575,
            "unit": "ns",
            "range": "± 33353.64033525347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654001.6322265626,
            "unit": "ns",
            "range": "± 37114.05970584713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101622.34921875,
            "unit": "ns",
            "range": "± 40082.748609497685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047303.668108259,
            "unit": "ns",
            "range": "± 17989.178725750327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939824.3430786133,
            "unit": "ns",
            "range": "± 17869.62062959746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635534.7216494845,
            "unit": "ns",
            "range": "± 160994.15112375087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3281327.525252525,
            "unit": "ns",
            "range": "± 256568.24018291512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2691506.8865979384,
            "unit": "ns",
            "range": "± 243156.47429175608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7132414.838383839,
            "unit": "ns",
            "range": "± 647046.4491903426"
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
          "id": "6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e",
          "message": "Changelog",
          "timestamp": "2023-06-28T14:35:28+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/6eead33b3a627df8dc35d59e9d1ffa8a8e26b16e"
        },
        "date": 1687931406783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3320228.1621621624,
            "unit": "ns",
            "range": "± 111248.39617133899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367235.74,
            "unit": "ns",
            "range": "± 131911.7410135153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241038.666666667,
            "unit": "ns",
            "range": "± 42493.80571106245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4222404.857142857,
            "unit": "ns",
            "range": "± 71962.36692012883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6856677.384615385,
            "unit": "ns",
            "range": "± 185543.21389888166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7662314.285714285,
            "unit": "ns",
            "range": "± 32179.84435452289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19678519.42857143,
            "unit": "ns",
            "range": "± 170025.3471799083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50475607.13333333,
            "unit": "ns",
            "range": "± 243239.9627075719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99961844.86666666,
            "unit": "ns",
            "range": "± 724083.2141200412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200813786.06666666,
            "unit": "ns",
            "range": "± 1022052.8165808867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282794.3548387097,
            "unit": "ns",
            "range": "± 7633.185523525492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265364.4318181818,
            "unit": "ns",
            "range": "± 9899.801936937525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226493.5,
            "unit": "ns",
            "range": "± 3261.4345298208414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214778.533333333,
            "unit": "ns",
            "range": "± 37606.59516791981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879114.5384615385,
            "unit": "ns",
            "range": "± 18197.30644269175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17075.288659793816,
            "unit": "ns",
            "range": "± 1188.7465821784276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86346.5376344086,
            "unit": "ns",
            "range": "± 5157.91773489858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70407.92307692308,
            "unit": "ns",
            "range": "± 1167.3041207227918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85913.52040816327,
            "unit": "ns",
            "range": "± 13021.310728859724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4165.273684210526,
            "unit": "ns",
            "range": "± 565.0742644114242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16061.510416666666,
            "unit": "ns",
            "range": "± 1167.6566095325663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45737.61363636364,
            "unit": "ns",
            "range": "± 2510.9409072719955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6233691.994270833,
            "unit": "ns",
            "range": "± 18436.493405009256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875385.1849888393,
            "unit": "ns",
            "range": "± 4265.522900179296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364276.6986607143,
            "unit": "ns",
            "range": "± 751.7177367481637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584384.7659040177,
            "unit": "ns",
            "range": "± 1917.3569310969592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804676.8811383928,
            "unit": "ns",
            "range": "± 716.6541074996687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740355.2092097356,
            "unit": "ns",
            "range": "± 544.1098220587404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394094.7525773195,
            "unit": "ns",
            "range": "± 116775.75477562673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596941.2285714285,
            "unit": "ns",
            "range": "± 84568.74227865327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131650.135135135,
            "unit": "ns",
            "range": "± 97119.3393331217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5218041.5,
            "unit": "ns",
            "range": "± 126972.83405881973"
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
          "id": "0ae8443088a45cb0f15b0d2c4f1065272f36c824",
          "message": "Changelog",
          "timestamp": "2023-06-28T15:16:48+09:00",
          "tree_id": "faf64967d947084048a5886ac079ae8cbbd6c6da",
          "url": "https://github.com/greymistcube/libplanet/commit/0ae8443088a45cb0f15b0d2c4f1065272f36c824"
        },
        "date": 1687933774923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293857,
            "unit": "ns",
            "range": "± 36733.94304221331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461444.5714285714,
            "unit": "ns",
            "range": "± 58822.33949663293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211736.266666667,
            "unit": "ns",
            "range": "± 64974.67038498999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4133669.6,
            "unit": "ns",
            "range": "± 66689.10156711194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6756580.0344827585,
            "unit": "ns",
            "range": "± 192167.0254481916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584036,
            "unit": "ns",
            "range": "± 17675.031750597092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19671602.733333334,
            "unit": "ns",
            "range": "± 130272.96078480022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50315133.71428572,
            "unit": "ns",
            "range": "± 243831.78840195693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101272262.86666666,
            "unit": "ns",
            "range": "± 675373.7317477176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203757065,
            "unit": "ns",
            "range": "± 1080561.749504065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279095.1395348837,
            "unit": "ns",
            "range": "± 10308.866494849852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267754.0857142857,
            "unit": "ns",
            "range": "± 8368.480469881608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226558.08333333334,
            "unit": "ns",
            "range": "± 942.4590136574865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175317.6428571427,
            "unit": "ns",
            "range": "± 42474.36642821199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700633.2666666666,
            "unit": "ns",
            "range": "± 27721.539558531706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17234.782608695652,
            "unit": "ns",
            "range": "± 1336.4241925943131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85089.9625,
            "unit": "ns",
            "range": "± 4191.938832544094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70349.9375,
            "unit": "ns",
            "range": "± 1893.0075223935878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88298.90721649484,
            "unit": "ns",
            "range": "± 10637.918563134655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4742.84693877551,
            "unit": "ns",
            "range": "± 680.8142994615762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17621.031578947368,
            "unit": "ns",
            "range": "± 1410.3220580785082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46802.166666666664,
            "unit": "ns",
            "range": "± 2468.880432481014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6061101.522135417,
            "unit": "ns",
            "range": "± 13333.126649469212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982229.9840745192,
            "unit": "ns",
            "range": "± 1211.569378439985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369790.3673177084,
            "unit": "ns",
            "range": "± 526.7249092291082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606087.576302083,
            "unit": "ns",
            "range": "± 1826.7101542512019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810042.3740985577,
            "unit": "ns",
            "range": "± 334.29136073778966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741121.5515136719,
            "unit": "ns",
            "range": "± 573.7801538689602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446758.6836734693,
            "unit": "ns",
            "range": "± 112500.40407538858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2684768.4166666665,
            "unit": "ns",
            "range": "± 69767.14861839045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245271.7613636362,
            "unit": "ns",
            "range": "± 118167.02368958542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5402988.882352941,
            "unit": "ns",
            "range": "± 170827.5768610799"
          }
        ]
      }
    ]
  }
}