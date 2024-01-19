window.BENCHMARK_DATA = {
  "lastUpdate": 1705643702250,
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
          "id": "c61248ddc720a28cea18f5dfda28d65709052b7e",
          "message": "Tweaked tests",
          "timestamp": "2024-01-18T13:44:05+09:00",
          "tree_id": "90452fd2a9b49dc0f5ad25967133c61a8e13b80a",
          "url": "https://github.com/greymistcube/libplanet/commit/c61248ddc720a28cea18f5dfda28d65709052b7e"
        },
        "date": 1705554546813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8360494.425531914,
            "unit": "ns",
            "range": "± 324850.4365957773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20599432.217391305,
            "unit": "ns",
            "range": "± 451309.385454445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50780280.5,
            "unit": "ns",
            "range": "± 573645.9826915163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103858296.61538461,
            "unit": "ns",
            "range": "± 968458.9537055368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214108652.2857143,
            "unit": "ns",
            "range": "± 2670560.984649341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75614.5752688172,
            "unit": "ns",
            "range": "± 13756.24074915167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320860.1956521739,
            "unit": "ns",
            "range": "± 37398.3561301299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313535.2528089888,
            "unit": "ns",
            "range": "± 31594.815503669735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301515.51086956525,
            "unit": "ns",
            "range": "± 30840.884693021246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465244.683673469,
            "unit": "ns",
            "range": "± 418926.2892812723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078908.7653061226,
            "unit": "ns",
            "range": "± 343890.7365205936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18755.945652173912,
            "unit": "ns",
            "range": "± 2843.332073945662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87385.19791666667,
            "unit": "ns",
            "range": "± 14172.04461467775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88794.14583333333,
            "unit": "ns",
            "range": "± 17367.414498348804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96174.39784946236,
            "unit": "ns",
            "range": "± 16104.082428094587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5633.552083333333,
            "unit": "ns",
            "range": "± 1202.9077303704921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17282.483146067414,
            "unit": "ns",
            "range": "± 2799.870102962407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425671.9204545454,
            "unit": "ns",
            "range": "± 145608.5172729222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003094.3720930233,
            "unit": "ns",
            "range": "± 232794.37814415674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225024.051020408,
            "unit": "ns",
            "range": "± 211325.80697919917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11717647.372340426,
            "unit": "ns",
            "range": "± 2925488.419256295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175562.410714286,
            "unit": "ns",
            "range": "± 131566.08820938304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3527896.3131313133,
            "unit": "ns",
            "range": "± 262191.61257501476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4342679.704545454,
            "unit": "ns",
            "range": "± 161004.04155949646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499037.417525773,
            "unit": "ns",
            "range": "± 484114.613198665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19966445.767676767,
            "unit": "ns",
            "range": "± 2554890.0643341793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5874511.117745535,
            "unit": "ns",
            "range": "± 90958.61031435528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1778901.4144005408,
            "unit": "ns",
            "range": "± 72706.37033230942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211293.6826533566,
            "unit": "ns",
            "range": "± 33765.48897757771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862755.654987374,
            "unit": "ns",
            "range": "± 248639.52969644358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 915109.9146935096,
            "unit": "ns",
            "range": "± 42617.42233462262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834846.4200134277,
            "unit": "ns",
            "range": "± 25782.679821896985"
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
          "id": "b335131b4a73516b94e3a63a7fd79c807d1ef795",
          "message": "Added tests",
          "timestamp": "2024-01-19T14:16:07+09:00",
          "tree_id": "91c896becbcac8dde8329f64bc7198bb77443f01",
          "url": "https://github.com/greymistcube/libplanet/commit/b335131b4a73516b94e3a63a7fd79c807d1ef795"
        },
        "date": 1705642390275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8104913.894736842,
            "unit": "ns",
            "range": "± 464773.4882864178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21353418.8,
            "unit": "ns",
            "range": "± 1551117.1677925522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59660956.2027027,
            "unit": "ns",
            "range": "± 2001421.075121137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103750805.5,
            "unit": "ns",
            "range": "± 4455955.1749874605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195101048.0882353,
            "unit": "ns",
            "range": "± 5072383.271693568"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64310,
            "unit": "ns",
            "range": "± 11809.471626327033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264041.68279569893,
            "unit": "ns",
            "range": "± 22671.20102059489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270935.5352112676,
            "unit": "ns",
            "range": "± 13165.859180721918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249304.9081632653,
            "unit": "ns",
            "range": "± 30272.06612380216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3918585.1052631577,
            "unit": "ns",
            "range": "± 84148.54938994936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3473418.794117647,
            "unit": "ns",
            "range": "± 69387.69035171576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15283.829787234043,
            "unit": "ns",
            "range": "± 1829.603073401429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71826.55555555556,
            "unit": "ns",
            "range": "± 9744.557601105853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59861.29473684211,
            "unit": "ns",
            "range": "± 11587.289734945258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65876.82828282828,
            "unit": "ns",
            "range": "± 12389.544144272031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3680.125,
            "unit": "ns",
            "range": "± 776.8966234356712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12432.252688172042,
            "unit": "ns",
            "range": "± 1697.3620367571016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1241404.819148936,
            "unit": "ns",
            "range": "± 159756.97533636162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2592291.9555555554,
            "unit": "ns",
            "range": "± 229419.92444532365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1987509.3333333333,
            "unit": "ns",
            "range": "± 171057.03641290922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 22702374.505617976,
            "unit": "ns",
            "range": "± 3632920.8557762485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2925457.6805555555,
            "unit": "ns",
            "range": "± 140255.84265009448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3092374,
            "unit": "ns",
            "range": "± 50680.8235771829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3523072.269230769,
            "unit": "ns",
            "range": "± 36112.128856184056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3712192.6621621624,
            "unit": "ns",
            "range": "± 123778.5434144638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23972221.829787236,
            "unit": "ns",
            "range": "± 4899084.2907920135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4420298.3145204745,
            "unit": "ns",
            "range": "± 125757.8601315624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1388324.3876201923,
            "unit": "ns",
            "range": "± 37154.280231447134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 908791.0939331055,
            "unit": "ns",
            "range": "± 17697.964806868917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2107745.1952275815,
            "unit": "ns",
            "range": "± 80781.3557800429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 728830.1166759672,
            "unit": "ns",
            "range": "± 16851.604119400654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 671437.6561279297,
            "unit": "ns",
            "range": "± 17039.72489075729"
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
          "id": "d4e83e7901c16d1df5e89ad05c1af7a79e329d88",
          "message": "Updated docs",
          "timestamp": "2024-01-19T14:28:55+09:00",
          "tree_id": "4a9601422f4e82fdd6f95b98db053a00344eba6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d4e83e7901c16d1df5e89ad05c1af7a79e329d88"
        },
        "date": 1705643679474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10007930.57368421,
            "unit": "ns",
            "range": "± 672867.458645859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25986630.35,
            "unit": "ns",
            "range": "± 895732.610055334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63742779.88636363,
            "unit": "ns",
            "range": "± 4636014.667801796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140126098,
            "unit": "ns",
            "range": "± 2307087.839503552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285656073.3988764,
            "unit": "ns",
            "range": "± 28685038.995926876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51680.39010989011,
            "unit": "ns",
            "range": "± 9394.683704037147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262156.8829787234,
            "unit": "ns",
            "range": "± 23520.49592084535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260748.38541666666,
            "unit": "ns",
            "range": "± 20928.602876582085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237924.92105263157,
            "unit": "ns",
            "range": "± 22937.941366188486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5571949.461538462,
            "unit": "ns",
            "range": "± 63119.266668500124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4793313.040540541,
            "unit": "ns",
            "range": "± 237851.33361599903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23423.532608695652,
            "unit": "ns",
            "range": "± 3548.04549028374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105149.08988764045,
            "unit": "ns",
            "range": "± 10779.220821309658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95504.19662921349,
            "unit": "ns",
            "range": "± 6723.857125605562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103124.70833333333,
            "unit": "ns",
            "range": "± 15703.483669767887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7762.515789473684,
            "unit": "ns",
            "range": "± 1065.4688595662883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22464.054347826088,
            "unit": "ns",
            "range": "± 2784.01421527621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521344.1030927836,
            "unit": "ns",
            "range": "± 279075.00299995835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3271858.005882353,
            "unit": "ns",
            "range": "± 342526.1832941917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2664495.4827586208,
            "unit": "ns",
            "range": "± 510401.71106765256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 30036338.224489797,
            "unit": "ns",
            "range": "± 4801253.716982771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865404.185714286,
            "unit": "ns",
            "range": "± 186963.96227976415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423782.154639175,
            "unit": "ns",
            "range": "± 270366.4027340314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3975607.272727273,
            "unit": "ns",
            "range": "± 362837.4803269595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4890531.827956989,
            "unit": "ns",
            "range": "± 307051.92115810496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25740921.488505747,
            "unit": "ns",
            "range": "± 2982833.4991464755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6039848.146594102,
            "unit": "ns",
            "range": "± 402358.4097363301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932550.5313406088,
            "unit": "ns",
            "range": "± 166288.53519025721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184684.392469618,
            "unit": "ns",
            "range": "± 69152.25049043741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2205348.9769831733,
            "unit": "ns",
            "range": "± 103048.77388298856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 709155.51875,
            "unit": "ns",
            "range": "± 25189.804510077407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571879.3952985491,
            "unit": "ns",
            "range": "± 9961.273281481308"
          }
        ]
      }
    ]
  }
}