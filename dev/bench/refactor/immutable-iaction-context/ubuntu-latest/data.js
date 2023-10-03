window.BENCHMARK_DATA = {
  "lastUpdate": 1696351173895,
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1696351129872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80380.65934065935,
            "unit": "ns",
            "range": "± 11073.212833199246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10980655.05,
            "unit": "ns",
            "range": "± 480673.3867321871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27996538.17647059,
            "unit": "ns",
            "range": "± 569270.3629311642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71668303.8,
            "unit": "ns",
            "range": "± 1312392.099383151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142257020,
            "unit": "ns",
            "range": "± 2414136.324849499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287507568.8,
            "unit": "ns",
            "range": "± 5218569.488269739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375067.03370786516,
            "unit": "ns",
            "range": "± 23407.57688929797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360848.5888888889,
            "unit": "ns",
            "range": "± 27906.697620598454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326375.37234042556,
            "unit": "ns",
            "range": "± 22321.822462394677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5671381.872340426,
            "unit": "ns",
            "range": "± 220095.65665682897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5098529.928571428,
            "unit": "ns",
            "range": "± 358520.86809390795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34183.104166666664,
            "unit": "ns",
            "range": "± 9282.520311661243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132180.30208333334,
            "unit": "ns",
            "range": "± 26270.04178311737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142714.7789473684,
            "unit": "ns",
            "range": "± 14374.473146444358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137724.86021505378,
            "unit": "ns",
            "range": "± 18580.35867206071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10137.117021276596,
            "unit": "ns",
            "range": "± 931.7396707856562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33088.302083333336,
            "unit": "ns",
            "range": "± 9655.359180671898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764911.425531915,
            "unit": "ns",
            "range": "± 140492.1641076289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3545714.345238095,
            "unit": "ns",
            "range": "± 190448.36515687808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738712.494736842,
            "unit": "ns",
            "range": "± 192214.80559901046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12630947.956521738,
            "unit": "ns",
            "range": "± 1153467.8314720404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6407111.19054878,
            "unit": "ns",
            "range": "± 226290.03071828737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2267401.9860491073,
            "unit": "ns",
            "range": "± 33924.01778631447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351150.8795572917,
            "unit": "ns",
            "range": "± 15334.87413874115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3339389.1436820654,
            "unit": "ns",
            "range": "± 83965.94522418687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063298.2303125,
            "unit": "ns",
            "range": "± 28286.985460278596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 949025.6037109375,
            "unit": "ns",
            "range": "± 27710.958014828826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4489321.3369565215,
            "unit": "ns",
            "range": "± 296738.5592637367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4632164,
            "unit": "ns",
            "range": "± 297824.3376801027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5752197.338983051,
            "unit": "ns",
            "range": "± 243754.82685736183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5624532.418367347,
            "unit": "ns",
            "range": "± 357975.1908207509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14399360.609195402,
            "unit": "ns",
            "range": "± 817604.1364076174"
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
          "id": "abf7c5492ca733759a8198b465c823d6c60ffee2",
          "message": "Changelog",
          "timestamp": "2023-10-04T01:24:11+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/greymistcube/libplanet/commit/abf7c5492ca733759a8198b465c823d6c60ffee2"
        },
        "date": 1696351166117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53143.36170212766,
            "unit": "ns",
            "range": "± 3720.4181457993095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8621975.944444444,
            "unit": "ns",
            "range": "± 174522.55083865818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22959822.57142857,
            "unit": "ns",
            "range": "± 223672.97392663875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57587534,
            "unit": "ns",
            "range": "± 681998.8476866051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114371195,
            "unit": "ns",
            "range": "± 828664.4384278373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226257485.66666666,
            "unit": "ns",
            "range": "± 3089555.7261668746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287398.14285714284,
            "unit": "ns",
            "range": "± 9305.931069335667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281493.5714285714,
            "unit": "ns",
            "range": "± 11171.158217332108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254296.53260869565,
            "unit": "ns",
            "range": "± 14331.567450643055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4539392.733333333,
            "unit": "ns",
            "range": "± 69394.996370124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046534.4,
            "unit": "ns",
            "range": "± 59649.66485212996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25026.58947368421,
            "unit": "ns",
            "range": "± 2241.483316318644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98170.81443298969,
            "unit": "ns",
            "range": "± 8556.36077884203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78435.44067796611,
            "unit": "ns",
            "range": "± 3486.802874441474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97406.13402061856,
            "unit": "ns",
            "range": "± 14391.446705008548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6672.989583333333,
            "unit": "ns",
            "range": "± 1046.5470492080808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21394.105263157893,
            "unit": "ns",
            "range": "± 2634.0708300533533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443654.8,
            "unit": "ns",
            "range": "± 69378.19819573694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2772391.6666666665,
            "unit": "ns",
            "range": "± 101066.05596067928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232925.821917808,
            "unit": "ns",
            "range": "± 110843.54622323684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9456953.966666667,
            "unit": "ns",
            "range": "± 422446.6786741003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5130316.522395833,
            "unit": "ns",
            "range": "± 39529.614571075355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1601142.8115885416,
            "unit": "ns",
            "range": "± 5680.49140382232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092473.2322591145,
            "unit": "ns",
            "range": "± 596.2108480849356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648664.0552884615,
            "unit": "ns",
            "range": "± 2988.8412338160556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824025.7440708706,
            "unit": "ns",
            "range": "± 1352.7111406144943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760204.8281947544,
            "unit": "ns",
            "range": "± 495.6526153522603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593220.3055555555,
            "unit": "ns",
            "range": "± 105923.66413839717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3717853.1923076925,
            "unit": "ns",
            "range": "± 100032.45531157145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4484255.785714285,
            "unit": "ns",
            "range": "± 128378.67725494821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4544824.533333333,
            "unit": "ns",
            "range": "± 169797.45989327724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10937735.488372093,
            "unit": "ns",
            "range": "± 403852.74597469735"
          }
        ]
      }
    ]
  }
}