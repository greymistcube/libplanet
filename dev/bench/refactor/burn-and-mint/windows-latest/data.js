window.BENCHMARK_DATA = {
  "lastUpdate": 1701238222019,
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
          "id": "ae984a4c9a197afcce3b5d05aed94398bb45a986",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:56:30+09:00",
          "tree_id": "a610211fe1df063f61634961f8c92f676c30a6ef",
          "url": "https://github.com/greymistcube/libplanet/commit/ae984a4c9a197afcce3b5d05aed94398bb45a986"
        },
        "date": 1701238197484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070724.7474747475,
            "unit": "ns",
            "range": "± 127918.71489781725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1786847.5409836066,
            "unit": "ns",
            "range": "± 78043.23076892999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432948.4536082475,
            "unit": "ns",
            "range": "± 148783.5411158061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5192586.597938145,
            "unit": "ns",
            "range": "± 301038.940805029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38995.744680851065,
            "unit": "ns",
            "range": "± 5918.803913128748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5368892.307692308,
            "unit": "ns",
            "range": "± 55827.28516801412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13837675,
            "unit": "ns",
            "range": "± 304501.42835202115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35291592.85714286,
            "unit": "ns",
            "range": "± 298619.1160718223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68098753.33333333,
            "unit": "ns",
            "range": "± 969022.0894332201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139884153.33333334,
            "unit": "ns",
            "range": "± 1902482.0389115247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339513.7920673075,
            "unit": "ns",
            "range": "± 13614.865441457314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070430.0130208333,
            "unit": "ns",
            "range": "± 1728.7322737807483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734263.2254464285,
            "unit": "ns",
            "range": "± 2138.5850853078487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926236.732700893,
            "unit": "ns",
            "range": "± 7502.833195110532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644170.4729352678,
            "unit": "ns",
            "range": "± 2659.00909370117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574321.923828125,
            "unit": "ns",
            "range": "± 632.1628077811766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2253618.0555555555,
            "unit": "ns",
            "range": "± 110957.35803996118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2355678.787878788,
            "unit": "ns",
            "range": "± 64899.99883270298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2867762.5,
            "unit": "ns",
            "range": "± 54852.51589489765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2870914.814814815,
            "unit": "ns",
            "range": "± 79844.66026028148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6048954.285714285,
            "unit": "ns",
            "range": "± 197132.9073058507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194343.29896907217,
            "unit": "ns",
            "range": "± 20276.273630447235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186818.27956989247,
            "unit": "ns",
            "range": "± 15267.569681009134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150268.75,
            "unit": "ns",
            "range": "± 11190.66634110296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2840120,
            "unit": "ns",
            "range": "± 51067.67498693698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2599069.230769231,
            "unit": "ns",
            "range": "± 27069.890549445787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14061.052631578947,
            "unit": "ns",
            "range": "± 2731.0388771059775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64094.845360824744,
            "unit": "ns",
            "range": "± 9188.629421895354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50439.56043956044,
            "unit": "ns",
            "range": "± 6400.275673244762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70510.30927835051,
            "unit": "ns",
            "range": "± 14055.014559876861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3478.3505154639174,
            "unit": "ns",
            "range": "± 972.8851855139125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12687.755102040815,
            "unit": "ns",
            "range": "± 2857.8438020890244"
          }
        ]
      }
    ]
  }
}