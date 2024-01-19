window.BENCHMARK_DATA = {
  "lastUpdate": 1705642409398,
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
      }
    ]
  }
}