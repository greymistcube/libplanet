window.BENCHMARK_DATA = {
  "lastUpdate": 1700534878450,
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
          "id": "1aaf4d0f97903475bf4dff51d08bfc581df2665f",
          "message": "Merge tag '3.6.2' into port/3.6.2-to-3.7.1\n\nLibplanet 3.6.2",
          "timestamp": "2023-11-21T11:21:28+09:00",
          "tree_id": "edce08a8074a4ad8dc2d4f560984a1db8e096f97",
          "url": "https://github.com/greymistcube/libplanet/commit/1aaf4d0f97903475bf4dff51d08bfc581df2665f"
        },
        "date": 1700534259422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8133364,
            "unit": "ns",
            "range": "± 169850.42381884472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20243627.615384616,
            "unit": "ns",
            "range": "± 305002.71620909066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59104196.72527473,
            "unit": "ns",
            "range": "± 9241742.210891105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105155867.1098901,
            "unit": "ns",
            "range": "± 7644676.129155412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229894560.3,
            "unit": "ns",
            "range": "± 21253642.483682808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62132.77173913043,
            "unit": "ns",
            "range": "± 15868.704319241073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248643.3777777778,
            "unit": "ns",
            "range": "± 20415.18190571225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239210.77777777778,
            "unit": "ns",
            "range": "± 30318.62180246035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233349.88505747126,
            "unit": "ns",
            "range": "± 15995.674834318157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3874967.02,
            "unit": "ns",
            "range": "± 99338.07557281347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3610298.8076923075,
            "unit": "ns",
            "range": "± 46651.708860063234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19211.94680851064,
            "unit": "ns",
            "range": "± 4398.667883311707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73485.32978723405,
            "unit": "ns",
            "range": "± 11163.26298444874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72868.31578947368,
            "unit": "ns",
            "range": "± 6109.320800538875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75998.92783505155,
            "unit": "ns",
            "range": "± 12426.9787980354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5211.813186813187,
            "unit": "ns",
            "range": "± 962.5235225072328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15130.73076923077,
            "unit": "ns",
            "range": "± 2717.951864003985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1244068.5666666667,
            "unit": "ns",
            "range": "± 184089.0309401063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2425586.772727273,
            "unit": "ns",
            "range": "± 156881.39771234075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1634932.224719101,
            "unit": "ns",
            "range": "± 164344.33665690743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7143146.297752809,
            "unit": "ns",
            "range": "± 701619.6070779926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237446.8936170214,
            "unit": "ns",
            "range": "± 366167.62208417454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3220939.7195121953,
            "unit": "ns",
            "range": "± 257905.7961923055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4181602.7021276597,
            "unit": "ns",
            "range": "± 644141.586433738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371396.105263158,
            "unit": "ns",
            "range": "± 968463.0089253235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14502902.140449438,
            "unit": "ns",
            "range": "± 2099736.6775259217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4344498.893229167,
            "unit": "ns",
            "range": "± 22238.795643219062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386842.3072916667,
            "unit": "ns",
            "range": "± 7259.604106027097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 871423.7661458333,
            "unit": "ns",
            "range": "± 12269.385179271701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928748.0958533655,
            "unit": "ns",
            "range": "± 11978.460457148429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636821.9377092634,
            "unit": "ns",
            "range": "± 10387.35501137028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565399.5254603794,
            "unit": "ns",
            "range": "± 8147.278332038211"
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
          "id": "d6d4f93e5ffbc80641781074f4f0f76f2c7bd5ae",
          "message": "Changelog",
          "timestamp": "2023-11-21T11:23:11+09:00",
          "tree_id": "926763fbb16b0e0f2a4b6cd5d2017c45634db74e",
          "url": "https://github.com/greymistcube/libplanet/commit/d6d4f93e5ffbc80641781074f4f0f76f2c7bd5ae"
        },
        "date": 1700534862771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9079604.266666668,
            "unit": "ns",
            "range": "± 1094028.3413093823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22950081.974358976,
            "unit": "ns",
            "range": "± 1158376.556043576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55555659.80508474,
            "unit": "ns",
            "range": "± 2247944.1413150667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109624143.72307692,
            "unit": "ns",
            "range": "± 5076721.178122319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300389617.22,
            "unit": "ns",
            "range": "± 51580430.570947945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55610.54255319149,
            "unit": "ns",
            "range": "± 11020.474015198946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284318.9431818182,
            "unit": "ns",
            "range": "± 26650.37528810307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253610.81914893616,
            "unit": "ns",
            "range": "± 23649.40951953886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240273.3791208791,
            "unit": "ns",
            "range": "± 19652.748831106535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3989054.085106383,
            "unit": "ns",
            "range": "± 287236.0707542341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3672412.714285714,
            "unit": "ns",
            "range": "± 298039.5807937451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18717.848484848484,
            "unit": "ns",
            "range": "± 6336.7954100353945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78379.78723404255,
            "unit": "ns",
            "range": "± 15331.746076534113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73502.02083333333,
            "unit": "ns",
            "range": "± 11299.90227715468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73928.37368421053,
            "unit": "ns",
            "range": "± 9885.372342283154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4279.5,
            "unit": "ns",
            "range": "± 1516.4771506533189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12773.755319148937,
            "unit": "ns",
            "range": "± 1286.8049428693175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444246.595505618,
            "unit": "ns",
            "range": "± 276434.00587928924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299037.033333333,
            "unit": "ns",
            "range": "± 632791.6356355535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336178.4777777777,
            "unit": "ns",
            "range": "± 459735.01803471084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10617382.258064516,
            "unit": "ns",
            "range": "± 2316641.150979032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4830610.908163265,
            "unit": "ns",
            "range": "± 1090936.917248562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5226043.673469388,
            "unit": "ns",
            "range": "± 1122598.5310981537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5174670.047368421,
            "unit": "ns",
            "range": "± 1075318.8410192356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159080.9886363638,
            "unit": "ns",
            "range": "± 397802.1125289484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17309689.288659792,
            "unit": "ns",
            "range": "± 4113914.2987935212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943066.65296875,
            "unit": "ns",
            "range": "± 557474.6724147114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1324222.264047476,
            "unit": "ns",
            "range": "± 12760.096712834678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900452.9665039063,
            "unit": "ns",
            "range": "± 20536.61306417816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972939.3044270833,
            "unit": "ns",
            "range": "± 28316.979059013458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630124.4849609375,
            "unit": "ns",
            "range": "± 11194.120739457354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584742.9411621094,
            "unit": "ns",
            "range": "± 10828.450895781152"
          }
        ]
      }
    ]
  }
}