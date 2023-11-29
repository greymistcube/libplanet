window.BENCHMARK_DATA = {
  "lastUpdate": 1701238193301,
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238174323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 909653.6842105263,
            "unit": "ns",
            "range": "± 83032.05073372662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1638747.7272727273,
            "unit": "ns",
            "range": "± 59651.04528855226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1286085.7142857143,
            "unit": "ns",
            "range": "± 119022.6678575032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5085004.04040404,
            "unit": "ns",
            "range": "± 310047.10600599425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33908.19672131148,
            "unit": "ns",
            "range": "± 1536.8035096662177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4818176.923076923,
            "unit": "ns",
            "range": "± 20166.27357107876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12760192.307692308,
            "unit": "ns",
            "range": "± 107760.02243827455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31887030.769230768,
            "unit": "ns",
            "range": "± 354188.4582737825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63886714.28571428,
            "unit": "ns",
            "range": "± 437763.5274141348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126170285.71428572,
            "unit": "ns",
            "range": "± 903133.6649152753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317200.3125,
            "unit": "ns",
            "range": "± 11517.321687085923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044507.0963541666,
            "unit": "ns",
            "range": "± 2308.7291318524835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744001.3323102678,
            "unit": "ns",
            "range": "± 1792.3488032874568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961852.5841346155,
            "unit": "ns",
            "range": "± 2933.6117621197095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615293.2692307692,
            "unit": "ns",
            "range": "± 1298.799014704972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570206.8134014423,
            "unit": "ns",
            "range": "± 2486.413161757368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097478.947368421,
            "unit": "ns",
            "range": "± 72298.67913224573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2178706.25,
            "unit": "ns",
            "range": "± 41729.940789957196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2706452.9411764704,
            "unit": "ns",
            "range": "± 51691.09108017381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2592240.7407407407,
            "unit": "ns",
            "range": "± 51717.88307925441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5958257.647058823,
            "unit": "ns",
            "range": "± 321434.2761734655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168113.51351351352,
            "unit": "ns",
            "range": "± 7330.239943078436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167085.7142857143,
            "unit": "ns",
            "range": "± 8922.35776901754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136933.33333333334,
            "unit": "ns",
            "range": "± 2411.248151281577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771907.1428571427,
            "unit": "ns",
            "range": "± 47009.33564051546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485038.888888889,
            "unit": "ns",
            "range": "± 52979.52033723408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11169.791666666666,
            "unit": "ns",
            "range": "± 1236.3034708071577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52721.05263157895,
            "unit": "ns",
            "range": "± 5994.676623167374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44472.916666666664,
            "unit": "ns",
            "range": "± 1747.7936953251776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55977.551020408166,
            "unit": "ns",
            "range": "± 12320.099499299016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2316.842105263158,
            "unit": "ns",
            "range": "± 366.88818853860323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10317.894736842105,
            "unit": "ns",
            "range": "± 1124.2944782876837"
          }
        ]
      }
    ]
  }
}