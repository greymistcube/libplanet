window.BENCHMARK_DATA = {
  "lastUpdate": 1688104019523,
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
      }
    ]
  }
}