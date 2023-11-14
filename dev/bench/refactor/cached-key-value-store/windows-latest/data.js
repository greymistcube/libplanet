window.BENCHMARK_DATA = {
  "lastUpdate": 1699966405198,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946201357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928345.918367347,
            "unit": "ns",
            "range": "± 103457.01126093298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1639159.1836734693,
            "unit": "ns",
            "range": "± 64812.836043382595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1348637.3737373736,
            "unit": "ns",
            "range": "± 122513.43248791595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6009655,
            "unit": "ns",
            "range": "± 364112.3032371838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33783.87096774193,
            "unit": "ns",
            "range": "± 1527.6890882279847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4965240,
            "unit": "ns",
            "range": "± 25806.77651869203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12891350,
            "unit": "ns",
            "range": "± 98136.51402314729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31737828.57142857,
            "unit": "ns",
            "range": "± 151528.547341221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62842440,
            "unit": "ns",
            "range": "± 446050.7815420636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124248515.38461539,
            "unit": "ns",
            "range": "± 475025.8235895425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3137993.5697115385,
            "unit": "ns",
            "range": "± 9468.30207813109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1030339.375,
            "unit": "ns",
            "range": "± 2296.0076931187973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 696343.6588541666,
            "unit": "ns",
            "range": "± 815.4326050413838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916537.5901442308,
            "unit": "ns",
            "range": "± 2092.0531980088135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628105.09765625,
            "unit": "ns",
            "range": "± 1610.7471905797977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550115.6040736607,
            "unit": "ns",
            "range": "± 716.1049360052428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154507.5757575757,
            "unit": "ns",
            "range": "± 61256.8671165886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296423.3333333335,
            "unit": "ns",
            "range": "± 67573.3710219075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741418.5185185187,
            "unit": "ns",
            "range": "± 73303.08544790142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690295.238095238,
            "unit": "ns",
            "range": "± 97992.11255561674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7176763.265306123,
            "unit": "ns",
            "range": "± 499501.4721685074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166046.9696969697,
            "unit": "ns",
            "range": "± 7490.264855068049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155986.98630136985,
            "unit": "ns",
            "range": "± 5298.702850942626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140113.63636363635,
            "unit": "ns",
            "range": "± 2196.2187102783328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720370,
            "unit": "ns",
            "range": "± 40953.16488729185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462478.5714285714,
            "unit": "ns",
            "range": "± 30082.45536652753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9230.337078651686,
            "unit": "ns",
            "range": "± 748.696517953646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49770.833333333336,
            "unit": "ns",
            "range": "± 2427.7989510004477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43851.851851851854,
            "unit": "ns",
            "range": "± 1195.9451911709418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 42149.4623655914,
            "unit": "ns",
            "range": "± 5539.534269701623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2394.949494949495,
            "unit": "ns",
            "range": "± 442.2515992227143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9389.772727272728,
            "unit": "ns",
            "range": "± 856.8909012931069"
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
          "id": "afa25e4a5cf588c43c32aa4bb319e908ab6151bd",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:16:02+09:00",
          "tree_id": "437d32b40becebf2b160befc86a6c16a4ecca2d2",
          "url": "https://github.com/greymistcube/libplanet/commit/afa25e4a5cf588c43c32aa4bb319e908ab6151bd"
        },
        "date": 1699954030501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960978.4946236559,
            "unit": "ns",
            "range": "± 94206.58826017559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868121.978021978,
            "unit": "ns",
            "range": "± 207520.61894996674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433915.3846153845,
            "unit": "ns",
            "range": "± 128509.74621325369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6037860.824742268,
            "unit": "ns",
            "range": "± 358201.7586607386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33870.967741935485,
            "unit": "ns",
            "range": "± 1535.9502955557411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5085735.714285715,
            "unit": "ns",
            "range": "± 66308.0179296459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12971593.333333334,
            "unit": "ns",
            "range": "± 158492.34982288876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32746528.57142857,
            "unit": "ns",
            "range": "± 468506.2489174774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65069353.333333336,
            "unit": "ns",
            "range": "± 595802.2357252766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131778293.33333333,
            "unit": "ns",
            "range": "± 1170732.4389132685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3242984.2447916665,
            "unit": "ns",
            "range": "± 10870.032447475402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047411.5931919643,
            "unit": "ns",
            "range": "± 3895.781526708473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 699833.8541666666,
            "unit": "ns",
            "range": "± 1746.5018496722057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961931.9791666667,
            "unit": "ns",
            "range": "± 3442.491986670086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623779.9455915178,
            "unit": "ns",
            "range": "± 1149.229981975978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571511.4536830357,
            "unit": "ns",
            "range": "± 1260.1363936559835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199414.285714286,
            "unit": "ns",
            "range": "± 69104.69952035332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2332887.5,
            "unit": "ns",
            "range": "± 59050.63643216285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2827221.276595745,
            "unit": "ns",
            "range": "± 104074.90600142017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702050,
            "unit": "ns",
            "range": "± 140793.51880221214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6836377.215189873,
            "unit": "ns",
            "range": "± 354486.95283551264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177994.11764705883,
            "unit": "ns",
            "range": "± 9554.13589002386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166964.2857142857,
            "unit": "ns",
            "range": "± 8881.992651401628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147260.3448275862,
            "unit": "ns",
            "range": "± 4213.782219234046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815382.3529411764,
            "unit": "ns",
            "range": "± 55704.2663906244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2616506.6666666665,
            "unit": "ns",
            "range": "± 46975.897568656976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11653.260869565218,
            "unit": "ns",
            "range": "± 1534.2572450005243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57737.5,
            "unit": "ns",
            "range": "± 7883.123212214012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44594.04761904762,
            "unit": "ns",
            "range": "± 2391.5690867086164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55114.89361702128,
            "unit": "ns",
            "range": "± 8951.986112863728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.559139784946,
            "unit": "ns",
            "range": "± 515.3692104645991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10834.831460674157,
            "unit": "ns",
            "range": "± 1402.1169970956178"
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
          "id": "dc9ce15013e30eaa5d96943193a5b49c9b74c1ed",
          "message": "Tuned cache size and report period",
          "timestamp": "2023-11-14T18:14:55+09:00",
          "tree_id": "979f040ca4b75b7084ff6b3fcaa50dac3556c19b",
          "url": "https://github.com/greymistcube/libplanet/commit/dc9ce15013e30eaa5d96943193a5b49c9b74c1ed"
        },
        "date": 1699954103279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1106650,
            "unit": "ns",
            "range": "± 122037.45368127812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889521.8181818181,
            "unit": "ns",
            "range": "± 80498.18192312974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601586.5979381443,
            "unit": "ns",
            "range": "± 147219.9358307622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6226588.333333333,
            "unit": "ns",
            "range": "± 275924.75275628286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38251.11111111111,
            "unit": "ns",
            "range": "± 3355.9688379733484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5266573.333333333,
            "unit": "ns",
            "range": "± 71098.14611473621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14497286.666666666,
            "unit": "ns",
            "range": "± 166059.6315728035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34344992.307692304,
            "unit": "ns",
            "range": "± 250023.8570668089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70399516.66666667,
            "unit": "ns",
            "range": "± 364618.8198784092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137611253.84615386,
            "unit": "ns",
            "range": "± 582904.3369418699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3257692.7283653845,
            "unit": "ns",
            "range": "± 5262.324202133824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054200.4324776786,
            "unit": "ns",
            "range": "± 2863.4062329026233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 709657.5495793269,
            "unit": "ns",
            "range": "± 1313.6404679771092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1985488.8802083333,
            "unit": "ns",
            "range": "± 12769.884086947977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619532.666015625,
            "unit": "ns",
            "range": "± 1311.1059129454563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568057.3091947115,
            "unit": "ns",
            "range": "± 1548.4018366459632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2317821.978021978,
            "unit": "ns",
            "range": "± 136797.894559982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2442508.9285714286,
            "unit": "ns",
            "range": "± 103754.65864990566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3007720,
            "unit": "ns",
            "range": "± 113656.85117132982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2956952.564102564,
            "unit": "ns",
            "range": "± 138204.59962308186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7195581.690140845,
            "unit": "ns",
            "range": "± 343463.3785052571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194425.8426966292,
            "unit": "ns",
            "range": "± 12174.241885019963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188974.44444444444,
            "unit": "ns",
            "range": "± 13043.966801269053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164800,
            "unit": "ns",
            "range": "± 12817.506966976256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884286.6666666665,
            "unit": "ns",
            "range": "± 51856.88915063217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2631593.3333333335,
            "unit": "ns",
            "range": "± 40209.12239541574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13995.78947368421,
            "unit": "ns",
            "range": "± 2232.2069886803843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66801.04166666667,
            "unit": "ns",
            "range": "± 8660.533529106156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57908.42105263158,
            "unit": "ns",
            "range": "± 5303.4846665247105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80370.21276595745,
            "unit": "ns",
            "range": "± 10712.677945847536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4791.836734693878,
            "unit": "ns",
            "range": "± 1513.371566682431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12892.222222222223,
            "unit": "ns",
            "range": "± 1325.3982041260747"
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
          "id": "1c0f1225d6bdfa95a7a6f6f750da372b430b5b65",
          "message": "Increased cache size; more info for logging",
          "timestamp": "2023-11-14T21:18:03+09:00",
          "tree_id": "b8d1e1f389a6ba89e36642eb75b042f5045a6623",
          "url": "https://github.com/greymistcube/libplanet/commit/1c0f1225d6bdfa95a7a6f6f750da372b430b5b65"
        },
        "date": 1699966370673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544102.0833333333,
            "unit": "ns",
            "range": "± 169706.20990354053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905300,
            "unit": "ns",
            "range": "± 160887.11316267124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274806.8421052634,
            "unit": "ns",
            "range": "± 141361.3188934063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10695938.94736842,
            "unit": "ns",
            "range": "± 735782.1590624666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60284.94623655914,
            "unit": "ns",
            "range": "± 6963.287988920414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9223061.842105264,
            "unit": "ns",
            "range": "± 466684.33527517086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25402660,
            "unit": "ns",
            "range": "± 1636693.4966572085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65381070,
            "unit": "ns",
            "range": "± 1921532.521667949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128101246.34146342,
            "unit": "ns",
            "range": "± 4588848.208652012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243010244,
            "unit": "ns",
            "range": "± 6356732.684201846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5652197.65625,
            "unit": "ns",
            "range": "± 186486.44683319295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1722305.447048611,
            "unit": "ns",
            "range": "± 34854.42822669223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285016.0213694852,
            "unit": "ns",
            "range": "± 25955.39688631038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3240462.0442708335,
            "unit": "ns",
            "range": "± 56048.14894447207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030713.546875,
            "unit": "ns",
            "range": "± 26368.787343311833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934766.0888671875,
            "unit": "ns",
            "range": "± 28963.18662427197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3827134.6153846155,
            "unit": "ns",
            "range": "± 157199.4398091792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3950057.5342465756,
            "unit": "ns",
            "range": "± 196579.3732240719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4941714.285714285,
            "unit": "ns",
            "range": "± 194742.70525490807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635267.857142857,
            "unit": "ns",
            "range": "± 197727.93531162312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12159562.962962963,
            "unit": "ns",
            "range": "± 636704.2147741063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296612.1621621622,
            "unit": "ns",
            "range": "± 14753.524795490446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285008,
            "unit": "ns",
            "range": "± 11315.346992073217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257862.5,
            "unit": "ns",
            "range": "± 18348.946621135045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5005647.05882353,
            "unit": "ns",
            "range": "± 99609.28745382543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4498500,
            "unit": "ns",
            "range": "± 103212.16982507441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24420,
            "unit": "ns",
            "range": "± 2959.499670192977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100946.23655913978,
            "unit": "ns",
            "range": "± 7268.777170344896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84559.5744680851,
            "unit": "ns",
            "range": "± 9180.063358051279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92747.91666666667,
            "unit": "ns",
            "range": "± 10934.561133990814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6175,
            "unit": "ns",
            "range": "± 765.1222699099065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23619.78021978022,
            "unit": "ns",
            "range": "± 2169.5990300421754"
          }
        ]
      }
    ]
  }
}