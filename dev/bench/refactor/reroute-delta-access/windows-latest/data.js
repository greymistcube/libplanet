window.BENCHMARK_DATA = {
  "lastUpdate": 1688111114949,
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
          "id": "562375f5749f1239d08719639d67a1a5f05299b5",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T14:30:25+09:00",
          "tree_id": "389a47a66d56321adead8d670cdb6acdeb0ffd82",
          "url": "https://github.com/greymistcube/libplanet/commit/562375f5749f1239d08719639d67a1a5f05299b5"
        },
        "date": 1688103998167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408438.775510204,
            "unit": "ns",
            "range": "± 102118.8529628292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578193.1506849313,
            "unit": "ns",
            "range": "± 126927.64269540773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1851103.092783505,
            "unit": "ns",
            "range": "± 172266.78948993154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5048145,
            "unit": "ns",
            "range": "± 310276.2348197802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48642.10526315789,
            "unit": "ns",
            "range": "± 3502.0230915119105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591175,
            "unit": "ns",
            "range": "± 192445.8258044721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20176084.615384616,
            "unit": "ns",
            "range": "± 172885.79489629297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51072820,
            "unit": "ns",
            "range": "± 931829.3944095745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102905280,
            "unit": "ns",
            "range": "± 1260138.3258538384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204400960,
            "unit": "ns",
            "range": "± 2166051.6224556738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4939240.989583333,
            "unit": "ns",
            "range": "± 14160.552173857348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529789.7235576923,
            "unit": "ns",
            "range": "± 5108.4792554746355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179840.0390625,
            "unit": "ns",
            "range": "± 5489.7451210464615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642316.5885416665,
            "unit": "ns",
            "range": "± 7121.814444154621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830222.7994791666,
            "unit": "ns",
            "range": "± 3414.899150144123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770015.9946986607,
            "unit": "ns",
            "range": "± 2719.56788060625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3405800,
            "unit": "ns",
            "range": "± 132699.28737399162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508800,
            "unit": "ns",
            "range": "± 49693.374091235026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4161673.6842105263,
            "unit": "ns",
            "range": "± 141257.9252676628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3834045.0704225353,
            "unit": "ns",
            "range": "± 187506.79133508922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6330874.193548387,
            "unit": "ns",
            "range": "± 192199.1553358858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276221.8181818182,
            "unit": "ns",
            "range": "± 11665.741088825655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267198.6842105263,
            "unit": "ns",
            "range": "± 13579.410821004496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234787.62886597938,
            "unit": "ns",
            "range": "± 14607.940604142601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003000,
            "unit": "ns",
            "range": "± 74480.34256480986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3650281.4814814813,
            "unit": "ns",
            "range": "± 99489.55893048445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20287.755102040817,
            "unit": "ns",
            "range": "± 2411.453140470501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90864.51612903226,
            "unit": "ns",
            "range": "± 7137.449385509875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78988.65979381443,
            "unit": "ns",
            "range": "± 7822.322176106285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103368.08510638298,
            "unit": "ns",
            "range": "± 15089.227181632452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5919.587628865979,
            "unit": "ns",
            "range": "± 1028.2103358969705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20122.448979591838,
            "unit": "ns",
            "range": "± 2272.2680713533186"
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
          "id": "9707580d09ad22bbc88d363cc176e708a7f18f42",
          "message": "Changelog",
          "timestamp": "2023-06-30T16:29:30+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/greymistcube/libplanet/commit/9707580d09ad22bbc88d363cc176e708a7f18f42"
        },
        "date": 1688111093341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393323.2323232323,
            "unit": "ns",
            "range": "± 123793.68190356645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2489011.86440678,
            "unit": "ns",
            "range": "± 109564.87148582541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769174.7474747475,
            "unit": "ns",
            "range": "± 129484.61916652834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4502875,
            "unit": "ns",
            "range": "± 128500.68345401183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43154.30107526882,
            "unit": "ns",
            "range": "± 2693.022949033404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6810980,
            "unit": "ns",
            "range": "± 52989.79955748896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17310185.714285713,
            "unit": "ns",
            "range": "± 100809.77407697405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43935360,
            "unit": "ns",
            "range": "± 367262.1286531694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87076826.66666667,
            "unit": "ns",
            "range": "± 637411.7210212236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178793986.66666666,
            "unit": "ns",
            "range": "± 1343072.2924201314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4815620.416666667,
            "unit": "ns",
            "range": "± 12502.517711242452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498333.5481770833,
            "unit": "ns",
            "range": "± 3540.4355084867248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149638.4375,
            "unit": "ns",
            "range": "± 3868.8307353015757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590549.1666666665,
            "unit": "ns",
            "range": "± 15132.28456427732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817874.2122395834,
            "unit": "ns",
            "range": "± 1886.5235004973529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745739.2508370535,
            "unit": "ns",
            "range": "± 550.3991878679648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957230.303030303,
            "unit": "ns",
            "range": "± 84368.70896861171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3100286.6666666665,
            "unit": "ns",
            "range": "± 71580.64048298271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4021650,
            "unit": "ns",
            "range": "± 77803.1704581075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3522860,
            "unit": "ns",
            "range": "± 49397.365458956556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5818722.5,
            "unit": "ns",
            "range": "± 187389.81718154627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251308.33333333334,
            "unit": "ns",
            "range": "± 6685.522738403803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244143.3962264151,
            "unit": "ns",
            "range": "± 10084.251038776376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212566.66666666666,
            "unit": "ns",
            "range": "± 9117.591578398113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3818557.1428571427,
            "unit": "ns",
            "range": "± 36346.552355510525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3489146.6666666665,
            "unit": "ns",
            "range": "± 39141.82758465254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16005.31914893617,
            "unit": "ns",
            "range": "± 1746.601432415363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76760,
            "unit": "ns",
            "range": "± 3419.28355068719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64718.181818181816,
            "unit": "ns",
            "range": "± 1796.9513323707715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84420.45454545454,
            "unit": "ns",
            "range": "± 6925.716844775137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4156.043956043956,
            "unit": "ns",
            "range": "± 579.3116204616939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15366.666666666666,
            "unit": "ns",
            "range": "± 1440.2241540937603"
          }
        ]
      }
    ]
  }
}