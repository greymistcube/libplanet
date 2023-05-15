window.BENCHMARK_DATA = {
  "lastUpdate": 1684144122173,
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
          "id": "2b3cbf39451018cb40616ce35eaec98920f1d09f",
          "message": "Removed t from ValidatingActionRenderer",
          "timestamp": "2023-05-15T18:16:40+09:00",
          "tree_id": "97f78ae1c1cd89e5920809d894e84fe961e1e86c",
          "url": "https://github.com/greymistcube/libplanet/commit/2b3cbf39451018cb40616ce35eaec98920f1d09f"
        },
        "date": 1684143031476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407317.9285714286,
            "unit": "ns",
            "range": "± 97462.5018660752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624896.586956522,
            "unit": "ns",
            "range": "± 134449.66184438713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363495.325,
            "unit": "ns",
            "range": "± 154226.36569423095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4478024.651162791,
            "unit": "ns",
            "range": "± 164641.33519503535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7046767.294117647,
            "unit": "ns",
            "range": "± 223723.21188624742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287552.1914893617,
            "unit": "ns",
            "range": "± 10227.143637608391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275085.67307692306,
            "unit": "ns",
            "range": "± 9744.304113467084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251957.58139534883,
            "unit": "ns",
            "range": "± 9314.124185580065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377706.666666667,
            "unit": "ns",
            "range": "± 75565.807184076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970121.5,
            "unit": "ns",
            "range": "± 72643.13784430479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19845.957446808512,
            "unit": "ns",
            "range": "± 1953.39705159512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89980.76190476191,
            "unit": "ns",
            "range": "± 4490.811504252214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79460.35416666667,
            "unit": "ns",
            "range": "± 5505.0566304829745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103677.1836734694,
            "unit": "ns",
            "range": "± 18367.80462702148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5760.917525773196,
            "unit": "ns",
            "range": "± 811.2095350732845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18783.05376344086,
            "unit": "ns",
            "range": "± 1700.8633253221433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957397.98046875,
            "unit": "ns",
            "range": "± 17608.82258628073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866178.4033954327,
            "unit": "ns",
            "range": "± 2052.427818115371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354428.7518229166,
            "unit": "ns",
            "range": "± 3216.527895313458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612034.0828125,
            "unit": "ns",
            "range": "± 2157.880724975609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827471.6606119792,
            "unit": "ns",
            "range": "± 769.4547260542367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749084.5456194197,
            "unit": "ns",
            "range": "± 262.7036294438126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8050835.625,
            "unit": "ns",
            "range": "± 149622.28989063317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21726400.3125,
            "unit": "ns",
            "range": "± 424928.7063173019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53684509.8,
            "unit": "ns",
            "range": "± 829680.5822390066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107945178.33333333,
            "unit": "ns",
            "range": "± 1715006.8698377053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213285756.46666667,
            "unit": "ns",
            "range": "± 2973269.4652084806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420392.8762886599,
            "unit": "ns",
            "range": "± 107950.39874098984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707498.522727273,
            "unit": "ns",
            "range": "± 99953.91798258455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309088.849056604,
            "unit": "ns",
            "range": "± 96244.23893995227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5848872.3239436615,
            "unit": "ns",
            "range": "± 284641.0846015319"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48328.59550561798,
            "unit": "ns",
            "range": "± 2244.5673642612833"
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
          "id": "5f91d28dd93096f81522e019fb7aa79c92594c41",
          "message": "Changelog",
          "timestamp": "2023-05-15T18:24:37+09:00",
          "tree_id": "fdc8462c023211bfe1f722a7dac715dc8cf8b11d",
          "url": "https://github.com/greymistcube/libplanet/commit/5f91d28dd93096f81522e019fb7aa79c92594c41"
        },
        "date": 1684143474629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335082.515151515,
            "unit": "ns",
            "range": "± 156191.121887675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3529240.173076923,
            "unit": "ns",
            "range": "± 143692.63515870192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300525.892857143,
            "unit": "ns",
            "range": "± 122106.18242950115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4450957.6875,
            "unit": "ns",
            "range": "± 77109.40670477565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7081977.833333333,
            "unit": "ns",
            "range": "± 276007.79702287115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283871.6285714286,
            "unit": "ns",
            "range": "± 9080.320926194683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274925.5483870968,
            "unit": "ns",
            "range": "± 8384.924256619573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231685.58333333334,
            "unit": "ns",
            "range": "± 2605.6890367157407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326125.909090909,
            "unit": "ns",
            "range": "± 103997.34301272138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3947233.2,
            "unit": "ns",
            "range": "± 63041.546795064336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18203.31914893617,
            "unit": "ns",
            "range": "± 1384.1420479404158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84630.02247191011,
            "unit": "ns",
            "range": "± 4775.90121428199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77220.8,
            "unit": "ns",
            "range": "± 4331.439954171791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94985.59183673469,
            "unit": "ns",
            "range": "± 16408.055650931234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5497.938775510204,
            "unit": "ns",
            "range": "± 723.364045695299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17828.15625,
            "unit": "ns",
            "range": "± 1450.4471058635315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991838.934375,
            "unit": "ns",
            "range": "± 33705.177715930404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899256.1583333334,
            "unit": "ns",
            "range": "± 2644.616452566992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356410.8587239583,
            "unit": "ns",
            "range": "± 4214.551732960794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603690.578385417,
            "unit": "ns",
            "range": "± 6650.7161267832635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835131.1874348958,
            "unit": "ns",
            "range": "± 1025.5921883572632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752486.7642299107,
            "unit": "ns",
            "range": "± 1039.9506823266918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7729572.217391305,
            "unit": "ns",
            "range": "± 192769.29359563388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21725345.8,
            "unit": "ns",
            "range": "± 219727.20870407857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53648540.666666664,
            "unit": "ns",
            "range": "± 930874.7579271619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106935181.4,
            "unit": "ns",
            "range": "± 1525682.1836562066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210733986.25,
            "unit": "ns",
            "range": "± 3872656.5699977665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406564.193877551,
            "unit": "ns",
            "range": "± 96815.00340964437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671062.611111111,
            "unit": "ns",
            "range": "± 88316.15060752003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2268699.724137931,
            "unit": "ns",
            "range": "± 97667.02641562265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5427659.666666667,
            "unit": "ns",
            "range": "± 160442.77528660075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48901.645161290326,
            "unit": "ns",
            "range": "± 2778.9801094660347"
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
          "id": "532341a554fb821429a44d5f5b7a0e17c4fa4e22",
          "message": "Changelog",
          "timestamp": "2023-05-15T18:34:37+09:00",
          "tree_id": "44a3cfbd90f13161f9a0792600fe7c83e9cf8b0a",
          "url": "https://github.com/greymistcube/libplanet/commit/532341a554fb821429a44d5f5b7a0e17c4fa4e22"
        },
        "date": 1684144115089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520424.073170732,
            "unit": "ns",
            "range": "± 125752.32995503308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3824046.125,
            "unit": "ns",
            "range": "± 73593.38445166114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564350.043478261,
            "unit": "ns",
            "range": "± 114509.43303480535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4639989.814814814,
            "unit": "ns",
            "range": "± 130036.93658372521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7123244.24,
            "unit": "ns",
            "range": "± 188313.25424083494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292013.63265306124,
            "unit": "ns",
            "range": "± 10789.519966719785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280680.75,
            "unit": "ns",
            "range": "± 7346.8969495316205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249101.5357142857,
            "unit": "ns",
            "range": "± 6291.590727913422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4490856.857142857,
            "unit": "ns",
            "range": "± 39806.275620148794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4179007.3571428573,
            "unit": "ns",
            "range": "± 36323.93483981675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21692.26530612245,
            "unit": "ns",
            "range": "± 2151.5714206996604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97664.6404494382,
            "unit": "ns",
            "range": "± 5581.818093855325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76134.68253968254,
            "unit": "ns",
            "range": "± 3483.9460100321958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92701.70408163265,
            "unit": "ns",
            "range": "± 15765.237378883976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5129.683673469388,
            "unit": "ns",
            "range": "± 739.6590130641181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18873.322916666668,
            "unit": "ns",
            "range": "± 1674.331033701719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6004930.425520834,
            "unit": "ns",
            "range": "± 31600.303099750778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876121.396763393,
            "unit": "ns",
            "range": "± 5018.942320209003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383258.1891927083,
            "unit": "ns",
            "range": "± 3194.3549584850234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595393.523177083,
            "unit": "ns",
            "range": "± 1946.3159939070977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853523.6215122768,
            "unit": "ns",
            "range": "± 898.5657301577048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759252.2545340402,
            "unit": "ns",
            "range": "± 281.6858323302338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7878651.666666667,
            "unit": "ns",
            "range": "± 121434.87078539949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22129120.666666668,
            "unit": "ns",
            "range": "± 342092.2146138099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55415613.13333333,
            "unit": "ns",
            "range": "± 457386.41713308246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112120729.13333334,
            "unit": "ns",
            "range": "± 788023.763070167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222625574.4,
            "unit": "ns",
            "range": "± 1228673.9361526428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435497.064516129,
            "unit": "ns",
            "range": "± 106070.14109600415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2669758.476190476,
            "unit": "ns",
            "range": "± 96941.8565249264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336683.9318181816,
            "unit": "ns",
            "range": "± 87567.7735695357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5658683.8,
            "unit": "ns",
            "range": "± 200429.9429777436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48219.74444444444,
            "unit": "ns",
            "range": "± 2706.1224698076767"
          }
        ]
      }
    ]
  }
}