window.BENCHMARK_DATA = {
  "lastUpdate": 1691651084155,
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
          "id": "9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:48:07+09:00",
          "tree_id": "70397303ba4a4f4f92fafbf90942603852dd6bde",
          "url": "https://github.com/greymistcube/libplanet/commit/9b84f18feaab424ff78bb0a6bb0ae2f125e5d9b1"
        },
        "date": 1691650953090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567756.25,
            "unit": "ns",
            "range": "± 69896.93364518933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3885808.625,
            "unit": "ns",
            "range": "± 100328.4544222939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536712.027027027,
            "unit": "ns",
            "range": "± 152346.8129737188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4085503.2,
            "unit": "ns",
            "range": "± 164484.2952347036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6438207.027027027,
            "unit": "ns",
            "range": "± 198912.0740427073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8747439.333333334,
            "unit": "ns",
            "range": "± 181540.5951545241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23242352,
            "unit": "ns",
            "range": "± 265715.71135761944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56774437.85714286,
            "unit": "ns",
            "range": "± 430563.92606152745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113708739.2,
            "unit": "ns",
            "range": "± 1509713.248985061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226753803.7857143,
            "unit": "ns",
            "range": "± 2875698.2006869535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51288.97647058823,
            "unit": "ns",
            "range": "± 2781.170817926759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5014147.49609375,
            "unit": "ns",
            "range": "± 19450.039235792727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1615969.1401041667,
            "unit": "ns",
            "range": "± 2445.7330222221008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089541.3611979166,
            "unit": "ns",
            "range": "± 1651.1135602624647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633883.9765625,
            "unit": "ns",
            "range": "± 3021.390531056623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821957.7961588542,
            "unit": "ns",
            "range": "± 936.4856029997462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762210.9109074519,
            "unit": "ns",
            "range": "± 369.45552435513423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283627.27906976745,
            "unit": "ns",
            "range": "± 10252.013394185138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278734.26785714284,
            "unit": "ns",
            "range": "± 11899.805577466108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243614.92753623187,
            "unit": "ns",
            "range": "± 11784.847828160831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4580684,
            "unit": "ns",
            "range": "± 56490.261620920115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162080.210526316,
            "unit": "ns",
            "range": "± 91498.4638235218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22622.07608695652,
            "unit": "ns",
            "range": "± 1588.0702037911092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92200.76288659793,
            "unit": "ns",
            "range": "± 5698.092171166438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79123.41269841269,
            "unit": "ns",
            "range": "± 3519.322619184076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90051.20212765958,
            "unit": "ns",
            "range": "± 11028.974408669748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5461.808510638298,
            "unit": "ns",
            "range": "± 666.0516185975885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20668.010416666668,
            "unit": "ns",
            "range": "± 1778.5588163027517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513192.2777777778,
            "unit": "ns",
            "range": "± 83578.79242146203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828693.888888889,
            "unit": "ns",
            "range": "± 71624.80232988342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891080.0759493671,
            "unit": "ns",
            "range": "± 96978.57777071209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4855163.692307692,
            "unit": "ns",
            "range": "± 130525.08356872079"
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
          "id": "cff522d7d987b363c6c80a59391a80c6c81f5b74",
          "message": "Prepare 3.1.3",
          "timestamp": "2023-08-10T15:47:29+09:00",
          "tree_id": "4f1744526a70056ce5533b086592ae352b6a96ea",
          "url": "https://github.com/greymistcube/libplanet/commit/cff522d7d987b363c6c80a59391a80c6c81f5b74"
        },
        "date": 1691651075548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4318324.904761905,
            "unit": "ns",
            "range": "± 101575.03441245036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4558530.92,
            "unit": "ns",
            "range": "± 120368.63917009279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5078044.383720931,
            "unit": "ns",
            "range": "± 275264.63284616376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4641107.2,
            "unit": "ns",
            "range": "± 197197.75008355148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7656832,
            "unit": "ns",
            "range": "± 281269.2989978008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10365686,
            "unit": "ns",
            "range": "± 209204.15791637602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27703630.352941178,
            "unit": "ns",
            "range": "± 433394.7784722292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69615934.26666667,
            "unit": "ns",
            "range": "± 302201.7610028266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136259215.66666666,
            "unit": "ns",
            "range": "± 1224294.250966926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270681310,
            "unit": "ns",
            "range": "± 1412264.0031149655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56868.34042553192,
            "unit": "ns",
            "range": "± 4020.473640190479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5935150.660590278,
            "unit": "ns",
            "range": "± 126225.93855024167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880493.8986979167,
            "unit": "ns",
            "range": "± 21376.200071722993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292365.2845052083,
            "unit": "ns",
            "range": "± 8317.238629721063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176757.406510417,
            "unit": "ns",
            "range": "± 42947.383394278506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978093.756640625,
            "unit": "ns",
            "range": "± 7987.344609122745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 885297.9521484375,
            "unit": "ns",
            "range": "± 7345.291284446584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320298.3846153846,
            "unit": "ns",
            "range": "± 14738.926361946607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310146.9036144578,
            "unit": "ns",
            "range": "± 16567.15493747505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299525.5423728814,
            "unit": "ns",
            "range": "± 13125.867676176076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5282021,
            "unit": "ns",
            "range": "± 142707.47005899868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4903695.466666667,
            "unit": "ns",
            "range": "± 82244.06193924682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25063.842105263157,
            "unit": "ns",
            "range": "± 2543.060713776407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100576.8085106383,
            "unit": "ns",
            "range": "± 6657.77819712232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86475.47959183673,
            "unit": "ns",
            "range": "± 7413.92523890232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96696.03125,
            "unit": "ns",
            "range": "± 12446.49331756846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5680.795698924731,
            "unit": "ns",
            "range": "± 653.323569196961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21643.64210526316,
            "unit": "ns",
            "range": "± 1876.0690734674597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742651.5810810812,
            "unit": "ns",
            "range": "± 83093.95497621488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299923.6875,
            "unit": "ns",
            "range": "± 102008.46131490602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219940.3289473685,
            "unit": "ns",
            "range": "± 112179.87761310113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5796282.416666667,
            "unit": "ns",
            "range": "± 228718.7247601468"
          }
        ]
      }
    ]
  }
}