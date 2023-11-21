window.BENCHMARK_DATA = {
  "lastUpdate": 1700528553176,
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
          "id": "2ae593ded64ac7056f5adb3dd7daa09963e75495",
          "message": "Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T09:26:48+09:00",
          "tree_id": "e18ded43cd8ed7dcf96832af16e16975454e9894",
          "url": "https://github.com/greymistcube/libplanet/commit/2ae593ded64ac7056f5adb3dd7daa09963e75495"
        },
        "date": 1700527752189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8804837.154761905,
            "unit": "ns",
            "range": "± 763039.0436221748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19562988.45,
            "unit": "ns",
            "range": "± 371394.39578552084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50198555.256410256,
            "unit": "ns",
            "range": "± 1753170.6435687602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103212016.26086956,
            "unit": "ns",
            "range": "± 7628033.098303147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210639914.03296703,
            "unit": "ns",
            "range": "± 13243089.65663376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58005.23333333333,
            "unit": "ns",
            "range": "± 14479.753807151914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250864.28260869565,
            "unit": "ns",
            "range": "± 21432.319132627043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241780.6030927835,
            "unit": "ns",
            "range": "± 20542.163067439153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278681.56666666665,
            "unit": "ns",
            "range": "± 60306.409295848716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4591877.770114942,
            "unit": "ns",
            "range": "± 662747.9815396297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750653.7391304346,
            "unit": "ns",
            "range": "± 215374.17226734335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15535.494382022473,
            "unit": "ns",
            "range": "± 1513.3434997592365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74947.27173913043,
            "unit": "ns",
            "range": "± 8361.74300550917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107505.08163265306,
            "unit": "ns",
            "range": "± 30588.487550250407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108969.06185567011,
            "unit": "ns",
            "range": "± 24836.53310390027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4821.797872340426,
            "unit": "ns",
            "range": "± 1468.712021369695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18854.979166666668,
            "unit": "ns",
            "range": "± 4192.65946997134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349242.611111111,
            "unit": "ns",
            "range": "± 213702.17365494222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070941.804347826,
            "unit": "ns",
            "range": "± 698922.013861303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503794.9895833335,
            "unit": "ns",
            "range": "± 589069.3425881736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12042042.790697675,
            "unit": "ns",
            "range": "± 5632231.746877861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260934.6404494382,
            "unit": "ns",
            "range": "± 258284.0558951805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3287419.7741935486,
            "unit": "ns",
            "range": "± 223962.69893503175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3687828.6981132077,
            "unit": "ns",
            "range": "± 152725.32799951997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3561625.0322580645,
            "unit": "ns",
            "range": "± 160312.73398617434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14533206.270833334,
            "unit": "ns",
            "range": "± 2965478.083784502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4561566.188401442,
            "unit": "ns",
            "range": "± 69904.20938667034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1341133.4125249335,
            "unit": "ns",
            "range": "± 47715.32932216125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 833747.2326171875,
            "unit": "ns",
            "range": "± 7991.263476185507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2279153.4762834823,
            "unit": "ns",
            "range": "± 279138.1742166134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 667439.6674017137,
            "unit": "ns",
            "range": "± 19943.63964011827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 626225.4166217672,
            "unit": "ns",
            "range": "± 17657.06562234966"
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
          "id": "1dd52810df4744e86ccb4ae280b6cc49ed6eb561",
          "message": "Changelog",
          "timestamp": "2023-11-21T09:29:08+09:00",
          "tree_id": "0f384439f7451e7b350fb82a0c0179dc746c7853",
          "url": "https://github.com/greymistcube/libplanet/commit/1dd52810df4744e86ccb4ae280b6cc49ed6eb561"
        },
        "date": 1700528521849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11688163.157142857,
            "unit": "ns",
            "range": "± 377064.21572934353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 35607854.28,
            "unit": "ns",
            "range": "± 6076075.4765676055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 103724478.94444445,
            "unit": "ns",
            "range": "± 20311846.89025801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139230664.13541666,
            "unit": "ns",
            "range": "± 36457724.92767141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260178492.67708334,
            "unit": "ns",
            "range": "± 33942778.34671926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93678.9574468085,
            "unit": "ns",
            "range": "± 28856.511484818097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309828.1149425287,
            "unit": "ns",
            "range": "± 23027.077761679804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358078.0340909091,
            "unit": "ns",
            "range": "± 23567.735474364716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 489432.5918367347,
            "unit": "ns",
            "range": "± 151634.32475164844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6409071.858585859,
            "unit": "ns",
            "range": "± 1365929.2570293585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5132556.898305085,
            "unit": "ns",
            "range": "± 226075.31033627858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21752.40860215054,
            "unit": "ns",
            "range": "± 3778.0234631022718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107988.22680412371,
            "unit": "ns",
            "range": "± 24783.600291870243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96216.01111111112,
            "unit": "ns",
            "range": "± 12070.069494456056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90598.66666666667,
            "unit": "ns",
            "range": "± 11345.602280475969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6049.414893617021,
            "unit": "ns",
            "range": "± 1000.1684445183239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21180.03125,
            "unit": "ns",
            "range": "± 4336.597999531369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2110974.78,
            "unit": "ns",
            "range": "± 603591.8407633443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4012553.1030927836,
            "unit": "ns",
            "range": "± 912273.1802926697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2810693.2157894736,
            "unit": "ns",
            "range": "± 808987.4629356482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14407936.691489361,
            "unit": "ns",
            "range": "± 4203688.497503638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979858.296296296,
            "unit": "ns",
            "range": "± 161083.0006334341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4438225.947916667,
            "unit": "ns",
            "range": "± 499426.8529429219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4969434.24691358,
            "unit": "ns",
            "range": "± 252779.98608026362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4455689.744897959,
            "unit": "ns",
            "range": "± 285379.7312404516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16139692.770833334,
            "unit": "ns",
            "range": "± 2612442.5203601224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5583766.080915178,
            "unit": "ns",
            "range": "± 746405.034274695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008325.7731644826,
            "unit": "ns",
            "range": "± 169881.78120618238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186035.7204615013,
            "unit": "ns",
            "range": "± 106418.4936427503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624027.4145720107,
            "unit": "ns",
            "range": "± 182047.7909235994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860882.3330797697,
            "unit": "ns",
            "range": "± 84898.953300031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770255.6527867268,
            "unit": "ns",
            "range": "± 59366.39288002165"
          }
        ]
      }
    ]
  }
}