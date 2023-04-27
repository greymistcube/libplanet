window.BENCHMARK_DATA = {
  "lastUpdate": 1682564057510,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682502014147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8087072,
            "unit": "ns",
            "range": "± 142993.802919667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19899612.74509804,
            "unit": "ns",
            "range": "± 812514.6576581089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47967870.928571425,
            "unit": "ns",
            "range": "± 581993.1560280207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100119491.08888888,
            "unit": "ns",
            "range": "± 3474800.7368445983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197693630.3846154,
            "unit": "ns",
            "range": "± 1487876.5951442646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65245.65979381443,
            "unit": "ns",
            "range": "± 10034.29076642378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313314.8775510204,
            "unit": "ns",
            "range": "± 25253.10021929748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300618.60869565216,
            "unit": "ns",
            "range": "± 20198.048934693546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284574.6105263158,
            "unit": "ns",
            "range": "± 34096.61677242215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065849.238095238,
            "unit": "ns",
            "range": "± 147169.19575500043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634579.875,
            "unit": "ns",
            "range": "± 112177.3925515355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19278.565217391304,
            "unit": "ns",
            "range": "± 2376.5665801709965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95370.39583333333,
            "unit": "ns",
            "range": "± 13462.818177233385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104011.21649484536,
            "unit": "ns",
            "range": "± 12842.91351065735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111994.2,
            "unit": "ns",
            "range": "± 9650.035400994622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7030.329787234043,
            "unit": "ns",
            "range": "± 1039.6963513325168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18893.5,
            "unit": "ns",
            "range": "± 2737.1413193605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660190.9897959183,
            "unit": "ns",
            "range": "± 208044.16368614108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011812.4395604394,
            "unit": "ns",
            "range": "± 168121.79948545303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2541171.373737374,
            "unit": "ns",
            "range": "± 254431.9974177209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6555670.065217392,
            "unit": "ns",
            "range": "± 420698.9526508642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225712.569767442,
            "unit": "ns",
            "range": "± 175527.51705795407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3464853.1340206186,
            "unit": "ns",
            "range": "± 285096.41265491326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476602.177777777,
            "unit": "ns",
            "range": "± 164659.90268322613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4344926.712765957,
            "unit": "ns",
            "range": "± 289786.3709364331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7270512.714285715,
            "unit": "ns",
            "range": "± 203259.42710238416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6259725.822172619,
            "unit": "ns",
            "range": "± 143179.12062718105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939658.5786830357,
            "unit": "ns",
            "range": "± 17514.527622706788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290748.293247768,
            "unit": "ns",
            "range": "± 13839.722643896677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2409709.170673077,
            "unit": "ns",
            "range": "± 10135.36670629802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849371.6682942709,
            "unit": "ns",
            "range": "± 5480.083456985531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719225.94296875,
            "unit": "ns",
            "range": "± 4640.535789520324"
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
          "id": "7c5826ddffe796f0bf864a730a00e2033503021f",
          "message": "Simplified JSON serialization",
          "timestamp": "2023-04-27T11:25:31+09:00",
          "tree_id": "5a71e80f98801528503d3c2898074ec13f4284ad",
          "url": "https://github.com/greymistcube/libplanet/commit/7c5826ddffe796f0bf864a730a00e2033503021f"
        },
        "date": 1682564035120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8952744.394736841,
            "unit": "ns",
            "range": "± 179476.91914000612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23244700.791666668,
            "unit": "ns",
            "range": "± 602940.1374646667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57841486.5,
            "unit": "ns",
            "range": "± 683759.5860848202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116092834.27777778,
            "unit": "ns",
            "range": "± 2325170.4361638627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251824526.3,
            "unit": "ns",
            "range": "± 5538745.983312345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66464.01648351649,
            "unit": "ns",
            "range": "± 7725.250333754221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392605.26666666666,
            "unit": "ns",
            "range": "± 27260.181361890205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364349.6506024096,
            "unit": "ns",
            "range": "± 18768.872113177786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318676.75,
            "unit": "ns",
            "range": "± 13082.072942841214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4779986.433333334,
            "unit": "ns",
            "range": "± 43396.32267578616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381379.466666667,
            "unit": "ns",
            "range": "± 57134.535691604586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21389.926315789475,
            "unit": "ns",
            "range": "± 2363.1551899864057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104850.32291666667,
            "unit": "ns",
            "range": "± 9034.755221097776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94029.95789473684,
            "unit": "ns",
            "range": "± 9039.016678203807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112399,
            "unit": "ns",
            "range": "± 12339.648029172913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6289.684782608696,
            "unit": "ns",
            "range": "± 594.1376043920292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20038.136842105265,
            "unit": "ns",
            "range": "± 2134.6042515797308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1884429.1666666667,
            "unit": "ns",
            "range": "± 199518.8644432119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3586622.1428571427,
            "unit": "ns",
            "range": "± 128229.34326708663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3245532.389473684,
            "unit": "ns",
            "range": "± 478678.2698863499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7839583.889830508,
            "unit": "ns",
            "range": "± 337746.9945776091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4001972.0555555555,
            "unit": "ns",
            "range": "± 313758.13894636545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4173931.0303030303,
            "unit": "ns",
            "range": "± 194995.12886872285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5385371.822033898,
            "unit": "ns",
            "range": "± 238239.96159113658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5371027.119565218,
            "unit": "ns",
            "range": "± 580307.9533976112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9244666.448717948,
            "unit": "ns",
            "range": "± 444195.77830878575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7061360.786658654,
            "unit": "ns",
            "range": "± 54648.61721324118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175030.3484933036,
            "unit": "ns",
            "range": "± 19669.871173909363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480667.847265625,
            "unit": "ns",
            "range": "± 10194.637899261925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2932445.09375,
            "unit": "ns",
            "range": "± 17253.71016184326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 930254.7104492188,
            "unit": "ns",
            "range": "± 4957.962884170653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858007.1327427456,
            "unit": "ns",
            "range": "± 4901.893581251137"
          }
        ]
      }
    ]
  }
}