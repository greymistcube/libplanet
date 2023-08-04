window.BENCHMARK_DATA = {
  "lastUpdate": 1691117943763,
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
          "id": "00df6e8b29f1fd741cf38622a90dc24c93ea57aa",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-03T18:02:54+09:00",
          "tree_id": "ec9c186229f152f3efbd7dc08393240dfeda5f5e",
          "url": "https://github.com/greymistcube/libplanet/commit/00df6e8b29f1fd741cf38622a90dc24c93ea57aa"
        },
        "date": 1691055681013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367322.90625,
            "unit": "ns",
            "range": "± 241371.26293618776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22985657.807692308,
            "unit": "ns",
            "range": "± 1290381.2033112948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56329804.76470588,
            "unit": "ns",
            "range": "± 1816781.0730979764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106955994.51612903,
            "unit": "ns",
            "range": "± 3184423.0812828965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233033126.88235295,
            "unit": "ns",
            "range": "± 7479476.508989944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75301.90625,
            "unit": "ns",
            "range": "± 9698.214807596103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321001.9767441861,
            "unit": "ns",
            "range": "± 19682.404636675004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324066.92696629214,
            "unit": "ns",
            "range": "± 28864.355528326425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327236.82584269665,
            "unit": "ns",
            "range": "± 21801.739327389412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4788366.467391305,
            "unit": "ns",
            "range": "± 454396.0397607243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4034966.102739726,
            "unit": "ns",
            "range": "± 200942.30025873234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24466.840425531915,
            "unit": "ns",
            "range": "± 5279.823580779442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112227.79166666667,
            "unit": "ns",
            "range": "± 24542.510292365714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125957.82954545454,
            "unit": "ns",
            "range": "± 17480.47257358618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118044.8762886598,
            "unit": "ns",
            "range": "± 21850.051644321946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8911.520833333334,
            "unit": "ns",
            "range": "± 1639.0004462230318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26232.114583333332,
            "unit": "ns",
            "range": "± 6207.639612216022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786497.0631578946,
            "unit": "ns",
            "range": "± 217397.7126576616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3211423.1666666665,
            "unit": "ns",
            "range": "± 284113.9983820155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251019.9583333335,
            "unit": "ns",
            "range": "± 282502.5835830036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6354609.638297873,
            "unit": "ns",
            "range": "± 509265.5031664247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3888050.0918367347,
            "unit": "ns",
            "range": "± 361735.4132230436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3888812.9375,
            "unit": "ns",
            "range": "± 412148.85546520725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4636979.116279069,
            "unit": "ns",
            "range": "± 250227.9122020995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083784.7747252746,
            "unit": "ns",
            "range": "± 366135.8122446753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6854731.630434782,
            "unit": "ns",
            "range": "± 264029.62321092846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6682549.345853365,
            "unit": "ns",
            "range": "± 178413.38258328283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777543.596179497,
            "unit": "ns",
            "range": "± 63253.14230401798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073838.214054988,
            "unit": "ns",
            "range": "± 44183.37341870271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678157.7471484374,
            "unit": "ns",
            "range": "± 181092.1340353647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873540.5296815814,
            "unit": "ns",
            "range": "± 27043.299234565766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836839.9833984375,
            "unit": "ns",
            "range": "± 24749.073639493214"
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
          "id": "d209af2c548175a4015c475c59a1cf3178400d1b",
          "message": "Parallel get for ITrie",
          "timestamp": "2023-08-04T11:39:35+09:00",
          "tree_id": "39363b6e5139d625a77b3009aa132541c3ab578a",
          "url": "https://github.com/greymistcube/libplanet/commit/d209af2c548175a4015c475c59a1cf3178400d1b"
        },
        "date": 1691117920874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8234243.787878788,
            "unit": "ns",
            "range": "± 260690.9146336852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19724030.315789472,
            "unit": "ns",
            "range": "± 412092.78031410096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50326602.526315786,
            "unit": "ns",
            "range": "± 1074591.9960166984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100137994.73333333,
            "unit": "ns",
            "range": "± 1626551.706606054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216483521.62903225,
            "unit": "ns",
            "range": "± 9787411.59325917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61191.22826086957,
            "unit": "ns",
            "range": "± 8736.92307356991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315243.89361702127,
            "unit": "ns",
            "range": "± 33284.170217121595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301524.20408163266,
            "unit": "ns",
            "range": "± 26453.756984247677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303903.1770833333,
            "unit": "ns",
            "range": "± 24908.935310127188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276930.425,
            "unit": "ns",
            "range": "± 148436.04530483094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3946316.9142857143,
            "unit": "ns",
            "range": "± 184018.3259607147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17880.57608695652,
            "unit": "ns",
            "range": "± 2234.850823419399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90249.41304347826,
            "unit": "ns",
            "range": "± 10876.562175181884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93713.63829787234,
            "unit": "ns",
            "range": "± 13011.00489998946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93490.125,
            "unit": "ns",
            "range": "± 10482.901495944918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5582.494736842105,
            "unit": "ns",
            "range": "± 886.2695770869476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17265.41935483871,
            "unit": "ns",
            "range": "± 1727.9373247652736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538922.7551020407,
            "unit": "ns",
            "range": "± 195594.02942241653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2822276.7702702703,
            "unit": "ns",
            "range": "± 134550.52132675913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1998302.8469387756,
            "unit": "ns",
            "range": "± 185979.9343323217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5504527.082352941,
            "unit": "ns",
            "range": "± 295587.07180747826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283778.0147058824,
            "unit": "ns",
            "range": "± 144922.2543155305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399155.846153846,
            "unit": "ns",
            "range": "± 53783.35997599715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4544108.641025641,
            "unit": "ns",
            "range": "± 229350.05896141217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3928073.3181818184,
            "unit": "ns",
            "range": "± 199439.28034153834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7002700.422535211,
            "unit": "ns",
            "range": "± 319747.9440224602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5211888.145833333,
            "unit": "ns",
            "range": "± 134038.4953426857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1641713.8371930805,
            "unit": "ns",
            "range": "± 16178.13454794288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 997972.7415364584,
            "unit": "ns",
            "range": "± 8362.649005608228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549953.076302083,
            "unit": "ns",
            "range": "± 27195.181124069528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798160.7619791667,
            "unit": "ns",
            "range": "± 9620.37032860916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717158.15234375,
            "unit": "ns",
            "range": "± 6026.835889126084"
          }
        ]
      }
    ]
  }
}