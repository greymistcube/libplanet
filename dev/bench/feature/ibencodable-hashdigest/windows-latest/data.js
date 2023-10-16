window.BENCHMARK_DATA = {
  "lastUpdate": 1697439606588,
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
          "id": "a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8",
          "message": "Update BlockMarshaler",
          "timestamp": "2023-10-16T15:44:03+09:00",
          "tree_id": "d14c1c94d85b5c5970b2ae3a4f0821014b4b9f30",
          "url": "https://github.com/greymistcube/libplanet/commit/a65e4f7986b6d8d33dea8fc57a25885f1aeb13a8"
        },
        "date": 1697439581394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309779.797979798,
            "unit": "ns",
            "range": "± 105214.81910426136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539549.2537313434,
            "unit": "ns",
            "range": "± 113984.42526933274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1925226.8041237113,
            "unit": "ns",
            "range": "± 111971.52959891925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8231917.857142857,
            "unit": "ns",
            "range": "± 208537.98668716065"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45157.8125,
            "unit": "ns",
            "range": "± 2090.325765414462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7795588.235294118,
            "unit": "ns",
            "range": "± 155023.32841524587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20311946.153846152,
            "unit": "ns",
            "range": "± 224268.8142066146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55977564.28571428,
            "unit": "ns",
            "range": "± 790331.9736834476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104805446.15384616,
            "unit": "ns",
            "range": "± 683665.3794259593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211589600,
            "unit": "ns",
            "range": "± 2234732.440999849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4381787.34375,
            "unit": "ns",
            "range": "± 16193.895251242153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1402829.1713169643,
            "unit": "ns",
            "range": "± 2024.3989820302816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004457.0963541666,
            "unit": "ns",
            "range": "± 2120.285665522524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567205.9709821427,
            "unit": "ns",
            "range": "± 8126.052738663387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808906.9401041666,
            "unit": "ns",
            "range": "± 981.419147263233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729410.80078125,
            "unit": "ns",
            "range": "± 873.3221438920702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258435.294117647,
            "unit": "ns",
            "range": "± 62151.407276670645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314256,
            "unit": "ns",
            "range": "± 85171.18585531141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115529.411764706,
            "unit": "ns",
            "range": "± 80206.53624164524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3911096.49122807,
            "unit": "ns",
            "range": "± 169221.54114494016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9994832.142857144,
            "unit": "ns",
            "range": "± 263753.4483588111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247896.66666666666,
            "unit": "ns",
            "range": "± 5668.75789674899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240606.52173913043,
            "unit": "ns",
            "range": "± 9131.445113182932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210821.73913043478,
            "unit": "ns",
            "range": "± 5313.44405701571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4117446.6666666665,
            "unit": "ns",
            "range": "± 44750.83186244645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828460,
            "unit": "ns",
            "range": "± 33673.6395419325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18102,
            "unit": "ns",
            "range": "± 2551.687102821792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76285.39325842696,
            "unit": "ns",
            "range": "± 4228.059692582988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63916.666666666664,
            "unit": "ns",
            "range": "± 1350.9256086106295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71091.48936170213,
            "unit": "ns",
            "range": "± 7543.300232863028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4132.98969072165,
            "unit": "ns",
            "range": "± 423.4583926541996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16504.123711340206,
            "unit": "ns",
            "range": "± 1688.2509147643752"
          }
        ]
      }
    ]
  }
}