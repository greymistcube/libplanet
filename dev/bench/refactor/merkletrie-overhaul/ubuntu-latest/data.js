window.BENCHMARK_DATA = {
  "lastUpdate": 1692759572882,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721099248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1733302.7926829269,
            "unit": "ns",
            "range": "± 91469.63849476993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3378525.29,
            "unit": "ns",
            "range": "± 207417.11161194078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176692.3673469387,
            "unit": "ns",
            "range": "± 132804.34281592933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5680958.054054054,
            "unit": "ns",
            "range": "± 189181.54322486493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334697.6666666667,
            "unit": "ns",
            "range": "± 10265.942740643291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330651.46153846156,
            "unit": "ns",
            "range": "± 12972.386236354449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305630.46153846156,
            "unit": "ns",
            "range": "± 14219.194929386962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5401055.928571428,
            "unit": "ns",
            "range": "± 35323.926717244714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5010295.266666667,
            "unit": "ns",
            "range": "± 69892.0975846408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24956.695652173912,
            "unit": "ns",
            "range": "± 2120.082943324222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105987.70212765958,
            "unit": "ns",
            "range": "± 7254.290485495628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93122.13402061856,
            "unit": "ns",
            "range": "± 7927.886901402838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96724.28888888888,
            "unit": "ns",
            "range": "± 11892.451153250931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6706.806122448979,
            "unit": "ns",
            "range": "± 1108.085221872037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22912.840425531915,
            "unit": "ns",
            "range": "± 2495.4836120746513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58953.74736842105,
            "unit": "ns",
            "range": "± 4311.01741451647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9998583.431818182,
            "unit": "ns",
            "range": "± 375423.3671050993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26781469.933333334,
            "unit": "ns",
            "range": "± 268257.4945225114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67581178.6,
            "unit": "ns",
            "range": "± 856935.9623293079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133485201.6,
            "unit": "ns",
            "range": "± 2469318.6888599396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266731393.20833334,
            "unit": "ns",
            "range": "± 6730868.655866279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4356960.8,
            "unit": "ns",
            "range": "± 58243.78582205757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4463816.655172414,
            "unit": "ns",
            "range": "± 195080.6334546615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5242346.685185186,
            "unit": "ns",
            "range": "± 220275.3058992592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4862108.127659574,
            "unit": "ns",
            "range": "± 179020.337855983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7657211,
            "unit": "ns",
            "range": "± 304553.44223358657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5814452.25625,
            "unit": "ns",
            "range": "± 96556.87834566915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848539.8248046874,
            "unit": "ns",
            "range": "± 27027.044872529295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288670.0569010417,
            "unit": "ns",
            "range": "± 9507.12964862568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072044.60390625,
            "unit": "ns",
            "range": "± 6882.668380387374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995836.0868489583,
            "unit": "ns",
            "range": "± 6413.575463118323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919106.4206380208,
            "unit": "ns",
            "range": "± 2744.4513975295094"
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
          "id": "eb95d966fb4b2ecaee383c85106a926bb89ad433",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T02:44:52+09:00",
          "tree_id": "1c2221d703d8ff464fdfc85ea909a5815ba6f6c9",
          "url": "https://github.com/greymistcube/libplanet/commit/eb95d966fb4b2ecaee383c85106a926bb89ad433"
        },
        "date": 1692756580632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481528.8202247191,
            "unit": "ns",
            "range": "± 80828.48650109826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2849316.2972972975,
            "unit": "ns",
            "range": "± 96181.51319708681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871182.704225352,
            "unit": "ns",
            "range": "± 90268.84906977986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891110.105263158,
            "unit": "ns",
            "range": "± 167863.4088363238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285923.08108108107,
            "unit": "ns",
            "range": "± 7487.441798617715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274646.1186440678,
            "unit": "ns",
            "range": "± 10643.930723388872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258931.35294117648,
            "unit": "ns",
            "range": "± 8301.86145932583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4616808.333333333,
            "unit": "ns",
            "range": "± 34365.56624560335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4221445.928571428,
            "unit": "ns",
            "range": "± 43344.463435748825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23833.436170212764,
            "unit": "ns",
            "range": "± 1754.2040228965575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97288.33333333333,
            "unit": "ns",
            "range": "± 4802.998722922417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87025.07692307692,
            "unit": "ns",
            "range": "± 3016.115630065785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97422.81443298969,
            "unit": "ns",
            "range": "± 13207.071496242945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7061.326530612245,
            "unit": "ns",
            "range": "± 848.7008722919262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22502.617021276597,
            "unit": "ns",
            "range": "± 1660.4695611718173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49399.90697674418,
            "unit": "ns",
            "range": "± 2636.3591321361755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8764303.466666667,
            "unit": "ns",
            "range": "± 153834.4476255779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23131022.64285714,
            "unit": "ns",
            "range": "± 251382.8457024823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57987279.266666666,
            "unit": "ns",
            "range": "± 332278.5061339931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116719118.35714285,
            "unit": "ns",
            "range": "± 277799.83177865186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230783634.26666668,
            "unit": "ns",
            "range": "± 434203.8629489389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3692910.3333333335,
            "unit": "ns",
            "range": "± 51112.529876547414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3880730.730769231,
            "unit": "ns",
            "range": "± 94958.89700857217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625495.857142857,
            "unit": "ns",
            "range": "± 65774.73849652095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295968.645833333,
            "unit": "ns",
            "range": "± 168939.00838298147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6631188.153846154,
            "unit": "ns",
            "range": "± 177014.07177751543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5120614.9296875,
            "unit": "ns",
            "range": "± 25742.902280707844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567091.5046037945,
            "unit": "ns",
            "range": "± 2079.0490223872926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074025.5734375,
            "unit": "ns",
            "range": "± 1304.8789224836592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716019.8420758927,
            "unit": "ns",
            "range": "± 8652.739401454266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846276.0606971154,
            "unit": "ns",
            "range": "± 499.25299900076914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769358.607561384,
            "unit": "ns",
            "range": "± 225.14904849973536"
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
          "id": "3b96a2a316b65b789a91e6ea84e1dc99e51684d1",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T11:47:16+09:00",
          "tree_id": "de9d901982dab57d16642ea8d522c2a38d0498c3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b96a2a316b65b789a91e6ea84e1dc99e51684d1"
        },
        "date": 1692759565406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293355.45,
            "unit": "ns",
            "range": "± 100464.12110148798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512083.193548387,
            "unit": "ns",
            "range": "± 76022.10129886324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607889.5375,
            "unit": "ns",
            "range": "± 84099.98454762028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4514031.909090909,
            "unit": "ns",
            "range": "± 212005.71051225715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263013.4222222222,
            "unit": "ns",
            "range": "± 9225.53945328079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255449.91836734695,
            "unit": "ns",
            "range": "± 9225.788091532557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214070.57142857142,
            "unit": "ns",
            "range": "± 2677.632240914054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4114549.3846153845,
            "unit": "ns",
            "range": "± 14686.566064142096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774720.6153846155,
            "unit": "ns",
            "range": "± 19809.275220371146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18208.597826086956,
            "unit": "ns",
            "range": "± 1383.1899272841301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82842.73255813954,
            "unit": "ns",
            "range": "± 4307.338038126588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68749.88235294117,
            "unit": "ns",
            "range": "± 1378.3958467342095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75044,
            "unit": "ns",
            "range": "± 11036.932809133765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4611.923913043478,
            "unit": "ns",
            "range": "± 376.17979199499666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16396.712765957447,
            "unit": "ns",
            "range": "± 1063.136934931678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47507.22222222222,
            "unit": "ns",
            "range": "± 2014.1761428909824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750060.785714285,
            "unit": "ns",
            "range": "± 13544.561418793615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19718804.8,
            "unit": "ns",
            "range": "± 122163.45238900215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50182264.266666666,
            "unit": "ns",
            "range": "± 348084.13377032586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101222662.85714285,
            "unit": "ns",
            "range": "± 878978.1508557674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200209182.2,
            "unit": "ns",
            "range": "± 1029402.1135785708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190716.923076923,
            "unit": "ns",
            "range": "± 78502.0046490142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3302171.4285714286,
            "unit": "ns",
            "range": "± 71476.6213349312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191869.466666667,
            "unit": "ns",
            "range": "± 61554.38864343197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3639854.8695652173,
            "unit": "ns",
            "range": "± 77054.51598133997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5892521.484848484,
            "unit": "ns",
            "range": "± 172760.27673396183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5134284.0859375,
            "unit": "ns",
            "range": "± 12415.243710816003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1690326.8826729911,
            "unit": "ns",
            "range": "± 916.9217691312738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072056.8274274555,
            "unit": "ns",
            "range": "± 460.23102781428526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567809.8771033655,
            "unit": "ns",
            "range": "± 2023.5357160927294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797246.5887974331,
            "unit": "ns",
            "range": "± 765.1733226536822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742204.7208984375,
            "unit": "ns",
            "range": "± 520.6794669168062"
          }
        ]
      }
    ]
  }
}