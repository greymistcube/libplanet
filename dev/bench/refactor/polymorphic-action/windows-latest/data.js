window.BENCHMARK_DATA = {
  "lastUpdate": 1682404832142,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682403740312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367098.98989899,
            "unit": "ns",
            "range": "± 141390.3804820075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448841.8604651163,
            "unit": "ns",
            "range": "± 83764.88988477594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139514.432989691,
            "unit": "ns",
            "range": "± 135100.44025163486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5498080,
            "unit": "ns",
            "range": "± 405506.5923812416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49146.875,
            "unit": "ns",
            "range": "± 3390.278769006901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6886433.333333333,
            "unit": "ns",
            "range": "± 81853.74296936725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19487163.157894738,
            "unit": "ns",
            "range": "± 288347.8574579405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48566760,
            "unit": "ns",
            "range": "± 837789.0331103648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96834994.11764705,
            "unit": "ns",
            "range": "± 1932387.6831754632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187480403.33333334,
            "unit": "ns",
            "range": "± 2729546.5007597003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4741689.557291667,
            "unit": "ns",
            "range": "± 25740.564177738812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516874.1666666667,
            "unit": "ns",
            "range": "± 6292.3079255333605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157468.3723958333,
            "unit": "ns",
            "range": "± 5168.86638324723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643211.1197916665,
            "unit": "ns",
            "range": "± 5505.637911859011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823774.0885416666,
            "unit": "ns",
            "range": "± 2896.4001177819823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761373.92578125,
            "unit": "ns",
            "range": "± 2451.4258784181843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016235.849056604,
            "unit": "ns",
            "range": "± 125830.70753739482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3130996.153846154,
            "unit": "ns",
            "range": "± 117928.27823913336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3850357.1428571427,
            "unit": "ns",
            "range": "± 89786.07114373906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4095300,
            "unit": "ns",
            "range": "± 109093.0721906758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6555611.111111111,
            "unit": "ns",
            "range": "± 247845.70092024285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266301.3698630137,
            "unit": "ns",
            "range": "± 13252.195763037043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252566.66666666666,
            "unit": "ns",
            "range": "± 9357.690080162072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207061.53846153847,
            "unit": "ns",
            "range": "± 2632.3432088598875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862492.3076923075,
            "unit": "ns",
            "range": "± 39979.6919601786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3440138.888888889,
            "unit": "ns",
            "range": "± 64734.33618293889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19072.340425531915,
            "unit": "ns",
            "range": "± 1566.408415364444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87293.81443298969,
            "unit": "ns",
            "range": "± 6587.611707354407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84253.68421052632,
            "unit": "ns",
            "range": "± 9051.446464002616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103401.0101010101,
            "unit": "ns",
            "range": "± 18422.443582237214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6096.7032967032965,
            "unit": "ns",
            "range": "± 789.718733256137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19410.63829787234,
            "unit": "ns",
            "range": "± 2257.9474019372888"
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
          "id": "af902ed0d0a03114471168937609ece48c506ad6",
          "message": "Added test for integer type id",
          "timestamp": "2023-04-25T15:24:04+09:00",
          "tree_id": "c93cdcdd0f726862bedf4aaff39ff28520f60b89",
          "url": "https://github.com/greymistcube/libplanet/commit/af902ed0d0a03114471168937609ece48c506ad6"
        },
        "date": 1682404810311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1269717.4603174604,
            "unit": "ns",
            "range": "± 57791.7410654971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2414197.2972972975,
            "unit": "ns",
            "range": "± 80829.84352084076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184830.612244898,
            "unit": "ns",
            "range": "± 85966.12269784349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5425317.171717172,
            "unit": "ns",
            "range": "± 327958.93596868974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46413.40206185567,
            "unit": "ns",
            "range": "± 2876.218179093113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6707330.769230769,
            "unit": "ns",
            "range": "± 14880.265713094901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18499720,
            "unit": "ns",
            "range": "± 248302.42850201848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47998126.666666664,
            "unit": "ns",
            "range": "± 743873.359485592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95109930.76923077,
            "unit": "ns",
            "range": "± 1304260.0548360844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189318037.0967742,
            "unit": "ns",
            "range": "± 5760288.704844688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4719979.609375,
            "unit": "ns",
            "range": "± 43672.550629077734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475966.5494791667,
            "unit": "ns",
            "range": "± 11007.274699118343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145888.0989583333,
            "unit": "ns",
            "range": "± 6855.9139333644025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683861.1979166665,
            "unit": "ns",
            "range": "± 9064.820598277574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831194.4270833334,
            "unit": "ns",
            "range": "± 2781.729862329308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754718.2161458334,
            "unit": "ns",
            "range": "± 1855.118404448735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2936985.714285714,
            "unit": "ns",
            "range": "± 124884.49416607687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148011.111111111,
            "unit": "ns",
            "range": "± 86608.33737328122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3932429.6296296297,
            "unit": "ns",
            "range": "± 106577.59475473118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3908523.529411765,
            "unit": "ns",
            "range": "± 121359.88069255519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6490325.531914894,
            "unit": "ns",
            "range": "± 233112.0615648052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258040,
            "unit": "ns",
            "range": "± 8931.184203791303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241379.3103448276,
            "unit": "ns",
            "range": "± 6545.793595363625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205330.76923076922,
            "unit": "ns",
            "range": "± 1890.0549442563017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3986038.4615384615,
            "unit": "ns",
            "range": "± 58536.71979281521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3409928.5714285714,
            "unit": "ns",
            "range": "± 39850.94205182084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17827.083333333332,
            "unit": "ns",
            "range": "± 1264.9509386505795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81101.0101010101,
            "unit": "ns",
            "range": "± 5151.054874122722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71547.31182795699,
            "unit": "ns",
            "range": "± 3929.4482242878044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93780.61224489796,
            "unit": "ns",
            "range": "± 11556.010246498057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5637.113402061856,
            "unit": "ns",
            "range": "± 803.0306640612675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17570.652173913044,
            "unit": "ns",
            "range": "± 1486.9792407101434"
          }
        ]
      }
    ]
  }
}