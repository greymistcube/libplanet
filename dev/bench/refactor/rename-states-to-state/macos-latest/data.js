window.BENCHMARK_DATA = {
  "lastUpdate": 1688120474482,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117608030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324306.72972973,
            "unit": "ns",
            "range": "± 275732.3426377118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20059763.4,
            "unit": "ns",
            "range": "± 297746.34210342774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50101911.06666667,
            "unit": "ns",
            "range": "± 911381.4739982428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99271703.5,
            "unit": "ns",
            "range": "± 1101189.0818674846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217715538.94615385,
            "unit": "ns",
            "range": "± 9642025.811672922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74153.88043478261,
            "unit": "ns",
            "range": "± 6424.033538022274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337146.43956043955,
            "unit": "ns",
            "range": "± 21139.57918440026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326043.0729166667,
            "unit": "ns",
            "range": "± 23865.249446244412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321703.78723404254,
            "unit": "ns",
            "range": "± 26105.831760879828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303937.411764706,
            "unit": "ns",
            "range": "± 201983.1505885914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881190.277777778,
            "unit": "ns",
            "range": "± 124789.14968952596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18990.072916666668,
            "unit": "ns",
            "range": "± 3135.5320382748832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108852.79120879121,
            "unit": "ns",
            "range": "± 18437.293473655503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118267.97802197802,
            "unit": "ns",
            "range": "± 12308.353483150304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123611.85567010309,
            "unit": "ns",
            "range": "± 20675.11842317439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6479.586021505376,
            "unit": "ns",
            "range": "± 807.0364554008424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19632.729166666668,
            "unit": "ns",
            "range": "± 3596.7158454965006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560355.074468085,
            "unit": "ns",
            "range": "± 112053.66871141679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017791.745283019,
            "unit": "ns",
            "range": "± 125363.93838707943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123188.102040816,
            "unit": "ns",
            "range": "± 203362.85764667415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6418259.989583333,
            "unit": "ns",
            "range": "± 502894.76594641025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356203.0692307693,
            "unit": "ns",
            "range": "± 145337.49757127473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494776.3731343285,
            "unit": "ns",
            "range": "± 161790.48667492837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548468.556179775,
            "unit": "ns",
            "range": "± 287394.0338297183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4187897.255319149,
            "unit": "ns",
            "range": "± 313932.9026851801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7288621.089285715,
            "unit": "ns",
            "range": "± 310857.66582641396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7086006.603170956,
            "unit": "ns",
            "range": "± 125712.9075773263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995144.5634014423,
            "unit": "ns",
            "range": "± 12512.956269437933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373996.080882353,
            "unit": "ns",
            "range": "± 26939.53127503146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913643.654166667,
            "unit": "ns",
            "range": "± 155236.2297399264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850414.9051036006,
            "unit": "ns",
            "range": "± 20428.07161116705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852866.9036287006,
            "unit": "ns",
            "range": "± 18787.956897272426"
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
          "id": "c82a74dc369847e7d30ae0837cfe40ae1cda7629",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:19:04+09:00",
          "tree_id": "df6e9073954b05dadad6934cdb9be172c8db348d",
          "url": "https://github.com/greymistcube/libplanet/commit/c82a74dc369847e7d30ae0837cfe40ae1cda7629"
        },
        "date": 1688117684117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8186652.5,
            "unit": "ns",
            "range": "± 166917.20699337916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20932169.029850747,
            "unit": "ns",
            "range": "± 993058.5487282416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49531651.184210524,
            "unit": "ns",
            "range": "± 1050894.6680533716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100082944.05882353,
            "unit": "ns",
            "range": "± 1977810.8948666095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204996212.46666667,
            "unit": "ns",
            "range": "± 2088682.8150457088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58550.114583333336,
            "unit": "ns",
            "range": "± 7887.419956881093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317302.44845360826,
            "unit": "ns",
            "range": "± 20901.17909670964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313284.1,
            "unit": "ns",
            "range": "± 27273.36530979168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294249.8144329897,
            "unit": "ns",
            "range": "± 25469.8418196771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175494.28,
            "unit": "ns",
            "range": "± 110500.80167149616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720471.25,
            "unit": "ns",
            "range": "± 32110.00708962012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16563.978723404256,
            "unit": "ns",
            "range": "± 1885.9261435425508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80855.41052631578,
            "unit": "ns",
            "range": "± 5789.396110966604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84727.87113402062,
            "unit": "ns",
            "range": "± 9207.881726089778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102558.94845360825,
            "unit": "ns",
            "range": "± 15744.177725677895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5192.15625,
            "unit": "ns",
            "range": "± 963.3867816813873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16050.792134831461,
            "unit": "ns",
            "range": "± 1752.8608512050914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1522303.1157894738,
            "unit": "ns",
            "range": "± 172413.1280513905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2889964.010989011,
            "unit": "ns",
            "range": "± 205448.47840936203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048261.6421052632,
            "unit": "ns",
            "range": "± 176820.8050670867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5927826.391752577,
            "unit": "ns",
            "range": "± 412627.3907187521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362866.1818181816,
            "unit": "ns",
            "range": "± 105756.5597166006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3491775.084745763,
            "unit": "ns",
            "range": "± 152803.4087615452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451155.338028169,
            "unit": "ns",
            "range": "± 205208.5784211444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009885.909090909,
            "unit": "ns",
            "range": "± 97022.28776379123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7128934.98,
            "unit": "ns",
            "range": "± 287914.8121445371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6518669.797794118,
            "unit": "ns",
            "range": "± 129324.25355058748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1973639.1755208333,
            "unit": "ns",
            "range": "± 12292.14650758138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290032.1001674107,
            "unit": "ns",
            "range": "± 14456.444474537706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518215.469010417,
            "unit": "ns",
            "range": "± 18104.19253297259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868312.6429036459,
            "unit": "ns",
            "range": "± 7088.977210018439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800370.1847205529,
            "unit": "ns",
            "range": "± 3962.658206675251"
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
          "id": "1dc7b9a95bf9b254acb5433565384466ede62306",
          "message": "Changelog",
          "timestamp": "2023-06-30T18:18:08+09:00",
          "tree_id": "e0c2208a1d284ce2e66f7cb6f595fa3636823780",
          "url": "https://github.com/greymistcube/libplanet/commit/1dc7b9a95bf9b254acb5433565384466ede62306"
        },
        "date": 1688117750704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8740898.3172043,
            "unit": "ns",
            "range": "± 700968.1992706812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19664330.736842107,
            "unit": "ns",
            "range": "± 416326.12706785026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56117904.02325582,
            "unit": "ns",
            "range": "± 2062545.7923713098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107591081.31818181,
            "unit": "ns",
            "range": "± 2622506.872880664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211039641.03333333,
            "unit": "ns",
            "range": "± 3704575.3372095907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68574.96703296703,
            "unit": "ns",
            "range": "± 10362.602185477192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349825.32608695654,
            "unit": "ns",
            "range": "± 31683.4525468438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311602.6489361702,
            "unit": "ns",
            "range": "± 29243.005995904463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313652.91228070174,
            "unit": "ns",
            "range": "± 13488.614643840378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113097.95,
            "unit": "ns",
            "range": "± 88442.98448895288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764077.3333333335,
            "unit": "ns",
            "range": "± 48210.41140540897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18418.40625,
            "unit": "ns",
            "range": "± 3830.919363555671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96759.57142857143,
            "unit": "ns",
            "range": "± 15515.443944298204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104586.26595744681,
            "unit": "ns",
            "range": "± 15499.413588231126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109407.31052631579,
            "unit": "ns",
            "range": "± 12672.233338820155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6134.183673469388,
            "unit": "ns",
            "range": "± 1182.0827360139572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19475.530303030304,
            "unit": "ns",
            "range": "± 3967.8821150160443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757728.6875,
            "unit": "ns",
            "range": "± 237849.46915769237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3370464.904494382,
            "unit": "ns",
            "range": "± 336442.1884731907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2330448.494845361,
            "unit": "ns",
            "range": "± 264951.76422645483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514361.577777778,
            "unit": "ns",
            "range": "± 639087.3494595914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3926759.9166666665,
            "unit": "ns",
            "range": "± 54286.81515542883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534389.5,
            "unit": "ns",
            "range": "± 182315.77333454016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583068.071428572,
            "unit": "ns",
            "range": "± 234078.35488061802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4133329.116161616,
            "unit": "ns",
            "range": "± 324575.93654200016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7352480.142857143,
            "unit": "ns",
            "range": "± 289704.7404300195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6670419.715460527,
            "unit": "ns",
            "range": "± 140314.8903313842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2056354.6712239583,
            "unit": "ns",
            "range": "± 37881.98449347872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321433.0164794922,
            "unit": "ns",
            "range": "± 23084.26611836801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666683.0463867188,
            "unit": "ns",
            "range": "± 52228.138765262505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809073.3443359375,
            "unit": "ns",
            "range": "± 5974.731905572858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721207.6310096154,
            "unit": "ns",
            "range": "± 1968.830509776352"
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
          "id": "e54abd15c3f660352fdde264eb0a29229b603d34",
          "message": "More renaming",
          "timestamp": "2023-06-30T19:05:43+09:00",
          "tree_id": "78ddfed628b48c2bdd2dbcc2b44146683bc54cbf",
          "url": "https://github.com/greymistcube/libplanet/commit/e54abd15c3f660352fdde264eb0a29229b603d34"
        },
        "date": 1688120462302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7710155.857142857,
            "unit": "ns",
            "range": "± 80409.78950242423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19521498.866666667,
            "unit": "ns",
            "range": "± 330315.8522585113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50897052.21428572,
            "unit": "ns",
            "range": "± 616345.7825754054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99882947.1764706,
            "unit": "ns",
            "range": "± 1950729.5315717862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208074072.84615386,
            "unit": "ns",
            "range": "± 1995212.4817321189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57223.61855670103,
            "unit": "ns",
            "range": "± 5978.766186547361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312958.67647058825,
            "unit": "ns",
            "range": "± 16835.88581627018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308456.8210526316,
            "unit": "ns",
            "range": "± 26698.913983403316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292529.59375,
            "unit": "ns",
            "range": "± 21533.658575443005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4178135.5,
            "unit": "ns",
            "range": "± 128052.50684702136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3696482.2666666666,
            "unit": "ns",
            "range": "± 164769.36912065666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16270.280898876405,
            "unit": "ns",
            "range": "± 1493.6883953729812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81939.85393258427,
            "unit": "ns",
            "range": "± 5911.589331271555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83220.1888888889,
            "unit": "ns",
            "range": "± 7364.713002935383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104563.36458333333,
            "unit": "ns",
            "range": "± 15316.080139320926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5165.371134020618,
            "unit": "ns",
            "range": "± 885.7146516559809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16560,
            "unit": "ns",
            "range": "± 1840.4589539814037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500392.2659574468,
            "unit": "ns",
            "range": "± 152994.26345802285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877116.4719101125,
            "unit": "ns",
            "range": "± 153458.76983649164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026039.9591836734,
            "unit": "ns",
            "range": "± 202880.20562837747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5849139.346666667,
            "unit": "ns",
            "range": "± 294675.0634713161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370348.1836734693,
            "unit": "ns",
            "range": "± 221291.19781105503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557772.8969072164,
            "unit": "ns",
            "range": "± 300917.51403161703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4428292.386363637,
            "unit": "ns",
            "range": "± 161913.20786080882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3890543.5,
            "unit": "ns",
            "range": "± 195306.9941860762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7339083,
            "unit": "ns",
            "range": "± 347596.3798092874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6540437.578125,
            "unit": "ns",
            "range": "± 108242.79478779269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923570.13671875,
            "unit": "ns",
            "range": "± 23036.386636788353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275105.4302083333,
            "unit": "ns",
            "range": "± 7968.806960926069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2489126.4501201925,
            "unit": "ns",
            "range": "± 30621.572114393708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852947.6830357143,
            "unit": "ns",
            "range": "± 3812.8927576570786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784030.116796875,
            "unit": "ns",
            "range": "± 4645.876546111443"
          }
        ]
      }
    ]
  }
}