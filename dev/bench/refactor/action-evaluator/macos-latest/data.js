window.BENCHMARK_DATA = {
  "lastUpdate": 1686311491107,
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
          "id": "f28a269cff6f1064e1e13d1a7630c2c05652dc1c",
          "message": "Remove null getters",
          "timestamp": "2023-06-09T20:20:20+09:00",
          "tree_id": "62330eb54892a69fe99510199b799e3ce891914e",
          "url": "https://github.com/greymistcube/libplanet/commit/f28a269cff6f1064e1e13d1a7630c2c05652dc1c"
        },
        "date": 1686311098314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10202375.976744186,
            "unit": "ns",
            "range": "± 2054135.9553403065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24843775.414893616,
            "unit": "ns",
            "range": "± 4729791.438224114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58660104.17977528,
            "unit": "ns",
            "range": "± 8553676.590956174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110155242.6,
            "unit": "ns",
            "range": "± 4176644.991557591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254268021.63186812,
            "unit": "ns",
            "range": "± 39248066.24117406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73211.67021276595,
            "unit": "ns",
            "range": "± 10721.800255712855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350739.4,
            "unit": "ns",
            "range": "± 23743.590284940085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344123.91489361704,
            "unit": "ns",
            "range": "± 26667.910897616566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333804.125,
            "unit": "ns",
            "range": "± 25192.277865055643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4435848.683673469,
            "unit": "ns",
            "range": "± 171258.3138520426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858580.6470588236,
            "unit": "ns",
            "range": "± 75738.38006415668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26234.790322580644,
            "unit": "ns",
            "range": "± 2838.9509719821467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123401.65625,
            "unit": "ns",
            "range": "± 15121.656408732146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120075.28767123287,
            "unit": "ns",
            "range": "± 5831.202528637193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129062.47916666667,
            "unit": "ns",
            "range": "± 16571.70393232434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8629.65306122449,
            "unit": "ns",
            "range": "± 1240.156178658462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19621.510101010103,
            "unit": "ns",
            "range": "± 4400.086936745379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1934469.8333333333,
            "unit": "ns",
            "range": "± 427472.0742718204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3423415.3604651163,
            "unit": "ns",
            "range": "± 421944.1321595623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764487.5,
            "unit": "ns",
            "range": "± 326061.01269462507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13289637.551020408,
            "unit": "ns",
            "range": "± 6595057.597150087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3708441.404761905,
            "unit": "ns",
            "range": "± 374531.899514472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827423.9404761903,
            "unit": "ns",
            "range": "± 676567.7303042145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4718325.966666667,
            "unit": "ns",
            "range": "± 210669.36636466725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4512996.125,
            "unit": "ns",
            "range": "± 300373.32779465034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8029425.120689655,
            "unit": "ns",
            "range": "± 347509.22442220186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7080792.1525,
            "unit": "ns",
            "range": "± 282899.8179157947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112729.036236702,
            "unit": "ns",
            "range": "± 81973.75760445873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375223.631802263,
            "unit": "ns",
            "range": "± 39990.00172353137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2757149.0001953123,
            "unit": "ns",
            "range": "± 219503.38745703493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907467.2862079327,
            "unit": "ns",
            "range": "± 7863.917018158567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820543.1252604167,
            "unit": "ns",
            "range": "± 9081.385779320497"
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
          "id": "f093145991322c716962ed3426f05a34016400bb",
          "message": "Changelog",
          "timestamp": "2023-06-09T20:27:12+09:00",
          "tree_id": "49ab16f949a88086deb57f05377c77ae2eb27f63",
          "url": "https://github.com/greymistcube/libplanet/commit/f093145991322c716962ed3426f05a34016400bb"
        },
        "date": 1686311458872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10644608.25,
            "unit": "ns",
            "range": "± 2507317.656618113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26591658.02631579,
            "unit": "ns",
            "range": "± 4923569.8247799575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55211965.287356324,
            "unit": "ns",
            "range": "± 6720785.199963908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106289543.52702703,
            "unit": "ns",
            "range": "± 2737771.3297403306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227120144.08241758,
            "unit": "ns",
            "range": "± 15492179.700559756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77440.84615384616,
            "unit": "ns",
            "range": "± 6357.277699915755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373809.4375,
            "unit": "ns",
            "range": "± 51357.915340503925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348057.23333333334,
            "unit": "ns",
            "range": "± 32006.767930998034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337406.72164948453,
            "unit": "ns",
            "range": "± 45197.2739127092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504298.094736842,
            "unit": "ns",
            "range": "± 298504.487024192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4217602.041237113,
            "unit": "ns",
            "range": "± 315294.0709209327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25815.64893617021,
            "unit": "ns",
            "range": "± 3423.2962411977815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132213.04166666666,
            "unit": "ns",
            "range": "± 27155.503465437785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116858.64772727272,
            "unit": "ns",
            "range": "± 18777.474743640072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132126.14285714287,
            "unit": "ns",
            "range": "± 19435.636609401256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8489.4375,
            "unit": "ns",
            "range": "± 2007.918407927657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25018.022222222222,
            "unit": "ns",
            "range": "± 4429.08534696912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651187.202247191,
            "unit": "ns",
            "range": "± 222963.486112595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3436201.04494382,
            "unit": "ns",
            "range": "± 505801.5806509036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3106755.9777777777,
            "unit": "ns",
            "range": "± 580966.5122699469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7232192.017241379,
            "unit": "ns",
            "range": "± 764122.6875394324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3440549.6875,
            "unit": "ns",
            "range": "± 266174.3438707761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624381.1041666665,
            "unit": "ns",
            "range": "± 354462.8086754282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4485131.91954023,
            "unit": "ns",
            "range": "± 247810.93239268253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4721517.989583333,
            "unit": "ns",
            "range": "± 541309.4480472815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8400250.329787234,
            "unit": "ns",
            "range": "± 739715.532912871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7555265.512586806,
            "unit": "ns",
            "range": "± 155720.9455920825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2215425.064493815,
            "unit": "ns",
            "range": "± 135051.1260997913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354209.1774236506,
            "unit": "ns",
            "range": "± 50841.40474764519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2783306.4583727904,
            "unit": "ns",
            "range": "± 226842.83833213762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886375.4477914664,
            "unit": "ns",
            "range": "± 11869.095481485447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763540.4656575521,
            "unit": "ns",
            "range": "± 10477.828380010633"
          }
        ]
      }
    ]
  }
}