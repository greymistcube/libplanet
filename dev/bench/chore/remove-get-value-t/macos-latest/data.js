window.BENCHMARK_DATA = {
  "lastUpdate": 1698035432462,
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
          "id": "cc8d01b4188659f912a2250585938d8eb7656120",
          "message": "Refactored Libplanet.Consensus",
          "timestamp": "2023-10-23T10:42:20+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/cc8d01b4188659f912a2250585938d8eb7656120"
        },
        "date": 1698026656425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9083225.335051546,
            "unit": "ns",
            "range": "± 540412.4785478042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22810358.25,
            "unit": "ns",
            "range": "± 898630.6934551484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56386798.56603774,
            "unit": "ns",
            "range": "± 2347189.713990431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112325898.3478261,
            "unit": "ns",
            "range": "± 2785196.478854077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235166475.73809522,
            "unit": "ns",
            "range": "± 5554532.611743737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75410.32417582418,
            "unit": "ns",
            "range": "± 5999.454092931023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320638.097826087,
            "unit": "ns",
            "range": "± 29972.329790629177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311724.7582417582,
            "unit": "ns",
            "range": "± 23407.596690600098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311407.2032967033,
            "unit": "ns",
            "range": "± 32158.31350694543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408048.865979382,
            "unit": "ns",
            "range": "± 387008.7328827249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4065558.6938775512,
            "unit": "ns",
            "range": "± 306021.50610194076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23392.875,
            "unit": "ns",
            "range": "± 5075.883593808544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113371.67708333333,
            "unit": "ns",
            "range": "± 17963.335320060778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103897.91052631578,
            "unit": "ns",
            "range": "± 21465.46198882067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93053.48936170213,
            "unit": "ns",
            "range": "± 10883.336094858463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5418.393617021276,
            "unit": "ns",
            "range": "± 886.1325353926466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17604.644444444446,
            "unit": "ns",
            "range": "± 1439.8293618553987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529817.23,
            "unit": "ns",
            "range": "± 176560.00270774434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842751.3846153845,
            "unit": "ns",
            "range": "± 116036.45304887122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2266564.610526316,
            "unit": "ns",
            "range": "± 178997.80193665845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11227870.678160919,
            "unit": "ns",
            "range": "± 1536236.750824132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437647.443298969,
            "unit": "ns",
            "range": "± 253045.61973667121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3633949.98989899,
            "unit": "ns",
            "range": "± 299105.127168628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4676749.175,
            "unit": "ns",
            "range": "± 355095.73328881094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5168882.29787234,
            "unit": "ns",
            "range": "± 905899.7907924816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16524005.326315789,
            "unit": "ns",
            "range": "± 2297943.096301085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5650289.6296875,
            "unit": "ns",
            "range": "± 103061.0356849338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1672799.8623599645,
            "unit": "ns",
            "range": "± 42787.951062503555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004172.6271033654,
            "unit": "ns",
            "range": "± 4802.503397513109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490409.763541667,
            "unit": "ns",
            "range": "± 29500.459823519148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834653.1743489583,
            "unit": "ns",
            "range": "± 10640.763010796854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786149.7957589285,
            "unit": "ns",
            "range": "± 22542.740622495618"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "021aa437738f54832337f9d588906a63f390b7fa",
          "message": "Merge pull request #3457 from greymistcube/chore/remove-get-value-t\n\n🧹 Partial removal of `Bencodex.Types.Dictionary.GetValue<T>()` usage",
          "timestamp": "2023-10-23T11:29:16+09:00",
          "tree_id": "33c46268ccbbc94cb4f79bb7c37c98e22226b010",
          "url": "https://github.com/greymistcube/libplanet/commit/021aa437738f54832337f9d588906a63f390b7fa"
        },
        "date": 1698034946549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7542126.192307692,
            "unit": "ns",
            "range": "± 64563.65795397157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18859905.533333335,
            "unit": "ns",
            "range": "± 506867.6361745964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45985146.76923077,
            "unit": "ns",
            "range": "± 360503.5991706957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92442762,
            "unit": "ns",
            "range": "± 858603.7682785825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190771708.6,
            "unit": "ns",
            "range": "± 3401570.948402366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34685.441860465115,
            "unit": "ns",
            "range": "± 2733.3505720125263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217206.3115942029,
            "unit": "ns",
            "range": "± 10392.707760556637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214610.20212765958,
            "unit": "ns",
            "range": "± 16014.246705503405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209653.24736842106,
            "unit": "ns",
            "range": "± 20956.56532326479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3701127.8181818184,
            "unit": "ns",
            "range": "± 74866.01000685371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3390670,
            "unit": "ns",
            "range": "± 34452.329294522046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13350.728260869566,
            "unit": "ns",
            "range": "± 1437.7340390714253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67724.31521739131,
            "unit": "ns",
            "range": "± 13892.140247556812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51405.443181818184,
            "unit": "ns",
            "range": "± 3052.958455345883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54561.565217391304,
            "unit": "ns",
            "range": "± 7114.420740174665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3238.5666666666666,
            "unit": "ns",
            "range": "± 372.55183788314935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12154.47311827957,
            "unit": "ns",
            "range": "± 1202.2077299285481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1102990.1041666667,
            "unit": "ns",
            "range": "± 97852.01572282819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2185029.48245614,
            "unit": "ns",
            "range": "± 94432.23534242714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615529.5568181819,
            "unit": "ns",
            "range": "± 88737.24302899848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7640661.1,
            "unit": "ns",
            "range": "± 485988.21294159704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2913852.3076923075,
            "unit": "ns",
            "range": "± 61965.392123519545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2962891.8360655736,
            "unit": "ns",
            "range": "± 133449.1831180419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3529044.7407407407,
            "unit": "ns",
            "range": "± 94716.46394801073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3580985.2551020407,
            "unit": "ns",
            "range": "± 236961.31022560693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11235397.02173913,
            "unit": "ns",
            "range": "± 957727.5426202931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4916379.67390625,
            "unit": "ns",
            "range": "± 508174.1790773003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1338640.0360107422,
            "unit": "ns",
            "range": "± 40951.43415980022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 876586.6704545454,
            "unit": "ns",
            "range": "± 20440.93738090095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2038933.6496710526,
            "unit": "ns",
            "range": "± 44113.173105295355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622591.3681640625,
            "unit": "ns",
            "range": "± 6629.0416968299505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583033.3246372768,
            "unit": "ns",
            "range": "± 13524.489993486417"
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
          "id": "bc1a8f45762a0be86c2a57a7b56a4682b9d2b122",
          "message": "General refactoring to remove Dictionary.GetValue<T>()",
          "timestamp": "2023-10-23T13:14:39+09:00",
          "tree_id": "5a44d0212adea7c22b896eebf945ad16911a6b5c",
          "url": "https://github.com/greymistcube/libplanet/commit/bc1a8f45762a0be86c2a57a7b56a4682b9d2b122"
        },
        "date": 1698035414944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210737.833333333,
            "unit": "ns",
            "range": "± 80250.51288101943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20700832.777777776,
            "unit": "ns",
            "range": "± 418503.4450147834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54070686.481481485,
            "unit": "ns",
            "range": "± 2277739.0931366403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103808165.51818182,
            "unit": "ns",
            "range": "± 4223212.855821249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210596050.5,
            "unit": "ns",
            "range": "± 6116158.294296548"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60997.63157894737,
            "unit": "ns",
            "range": "± 11737.507181293096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276498.42553191487,
            "unit": "ns",
            "range": "± 31323.49328876968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267292.0989010989,
            "unit": "ns",
            "range": "± 31796.407499399793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259027.49462365592,
            "unit": "ns",
            "range": "± 22121.60589619572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3945883.080645161,
            "unit": "ns",
            "range": "± 101805.18573752326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714508.7608695654,
            "unit": "ns",
            "range": "± 76568.50388746809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27127.702127659573,
            "unit": "ns",
            "range": "± 8427.495916088857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103296.5052631579,
            "unit": "ns",
            "range": "± 10971.078459831582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97168.14942528735,
            "unit": "ns",
            "range": "± 24360.241193639613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91220.08695652174,
            "unit": "ns",
            "range": "± 15133.288652236693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7557.982758620689,
            "unit": "ns",
            "range": "± 1011.5205668978846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26510.45,
            "unit": "ns",
            "range": "± 9592.101069988194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1204621.118556701,
            "unit": "ns",
            "range": "± 112096.59114533802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2599518.904494382,
            "unit": "ns",
            "range": "± 227886.94069900693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871031.1063829786,
            "unit": "ns",
            "range": "± 151519.66751662563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8128946.975,
            "unit": "ns",
            "range": "± 538718.7146624563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3082592.090909091,
            "unit": "ns",
            "range": "± 115298.46612572533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3164932.034883721,
            "unit": "ns",
            "range": "± 171319.48428439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3845328.596153846,
            "unit": "ns",
            "range": "± 157743.21414114398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3799447.0416666665,
            "unit": "ns",
            "range": "± 186901.04660740105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11863133.542553192,
            "unit": "ns",
            "range": "± 1159584.1001816394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4621949.397820723,
            "unit": "ns",
            "range": "± 95634.2103366961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1380202.6331521738,
            "unit": "ns",
            "range": "± 33633.203782311924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905664.5666503906,
            "unit": "ns",
            "range": "± 17722.624248431228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2296283.979296875,
            "unit": "ns",
            "range": "± 39267.41026555514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 652146.0100528493,
            "unit": "ns",
            "range": "± 10530.500594993544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590852.4465680803,
            "unit": "ns",
            "range": "± 6317.018919836445"
          }
        ]
      }
    ]
  }
}