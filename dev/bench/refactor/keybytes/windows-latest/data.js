window.BENCHMARK_DATA = {
  "lastUpdate": 1693402279623,
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
          "id": "39627a9e924bc1f1b1014d7348b5ca8a94fe8d78",
          "message": "Remove unnecessary interfaces from KeyBytes",
          "timestamp": "2023-08-30T22:09:21+09:00",
          "tree_id": "8e5ea6425b49c1e8d6b3377dfff3c93746040037",
          "url": "https://github.com/greymistcube/libplanet/commit/39627a9e924bc1f1b1014d7348b5ca8a94fe8d78"
        },
        "date": 1693402251864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1648124.1758241758,
            "unit": "ns",
            "range": "± 170369.14844645062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3325751.5789473685,
            "unit": "ns",
            "range": "± 215984.92355932438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2092054.347826087,
            "unit": "ns",
            "range": "± 210016.06239620136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5791695.833333333,
            "unit": "ns",
            "range": "± 532370.2965174101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78575.51020408163,
            "unit": "ns",
            "range": "± 16000.283897123656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9380365.656565657,
            "unit": "ns",
            "range": "± 955616.6773945584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23971344.776119404,
            "unit": "ns",
            "range": "± 1137844.060824066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60340367.6056338,
            "unit": "ns",
            "range": "± 2955759.542209783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127165869.23076923,
            "unit": "ns",
            "range": "± 6509616.000750181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256293804.3478261,
            "unit": "ns",
            "range": "± 5507687.634527369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5103661.565290178,
            "unit": "ns",
            "range": "± 217778.63057156288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1698157.2021484375,
            "unit": "ns",
            "range": "± 51149.70547439698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256605.3645833333,
            "unit": "ns",
            "range": "± 21998.979409419877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3006752.7217741935,
            "unit": "ns",
            "range": "± 91473.33347720352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982948.7477022059,
            "unit": "ns",
            "range": "± 19782.638123373534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941303.7434895834,
            "unit": "ns",
            "range": "± 20099.38927399575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3723158.163265306,
            "unit": "ns",
            "range": "± 379313.48048687354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213993.617021277,
            "unit": "ns",
            "range": "± 238789.8346247382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5264100,
            "unit": "ns",
            "range": "± 186457.02811461233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680140,
            "unit": "ns",
            "range": "± 269147.00539043394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7692996.385542168,
            "unit": "ns",
            "range": "± 406809.0732271677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319005.376344086,
            "unit": "ns",
            "range": "± 34066.065499362056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298916.84210526315,
            "unit": "ns",
            "range": "± 32151.984990942357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257772.44897959183,
            "unit": "ns",
            "range": "± 43104.004001379944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4910538.29787234,
            "unit": "ns",
            "range": "± 418513.9599183449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4620905.405405405,
            "unit": "ns",
            "range": "± 229254.98285132684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33721,
            "unit": "ns",
            "range": "± 10025.626709043725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134188.65979381444,
            "unit": "ns",
            "range": "± 20481.449311351742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136218.75,
            "unit": "ns",
            "range": "± 16239.784238260776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123521.64948453609,
            "unit": "ns",
            "range": "± 21183.052516517197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9093.589743589744,
            "unit": "ns",
            "range": "± 2748.4276375510563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33253,
            "unit": "ns",
            "range": "± 10318.919125528211"
          }
        ]
      }
    ]
  }
}